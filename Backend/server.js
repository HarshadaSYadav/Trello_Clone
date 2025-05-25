const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = express.Router();
const { verifyToken } = require('./middleware/auth');
const Board = require('./models/Board');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: "http://localhost:5173", // Make sure this matches your frontend port
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"], // Corrected allowedHeaders
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
}, { collection: 'Trello_User' });

const User = mongoose.model('Trello_User', userSchema);

// Register Route
app.post('/api/signup', async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "User already exists" });

    const user = new User({ email });
    await user.save();
    // Return JWT token on successful registration
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST /api/boards
router.post('/', verifyToken, async (req, res) => {
  const { boardName } = req.body;
  const userId = req.user.id;

  if (!boardName) {
    return res.status(400).json({ message: 'Board name is required' });
  }

  try {
    const newBoard = new Board({ name: boardName, userId });
    await newBoard.save();
    res.status(201).json({ message: 'Board created successfully', board: newBoard });
  } catch (error) {
    console.error('Error creating board:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET /api/boards
router.get('/', verifyToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const boards = await Board.find({ userId });
    res.status(200).json({ boards });
  } catch (error) {
    console.error('Error fetching boards:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.use('/api/boards', router);

// Add this catch-all handler for unknown API routes (returns JSON, not HTML)
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Optionally, handle all other routes (frontend SPA fallback)
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





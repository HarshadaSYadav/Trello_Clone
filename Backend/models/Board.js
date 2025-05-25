const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trello_User', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Board', boardSchema);
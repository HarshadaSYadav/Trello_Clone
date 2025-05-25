import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProductivitySection from './components/ProductivitySection/ProductivitySection';
import MessageToAction from './components/MessageToAction/MessageToAction';
import IntegrationSection from './components/IntegrationSection/IntegrationSection';
import WorkSmarter from './components/WorkSmarter/WorkSmarter';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Onboarding from './components/Onboarding/Onboarding';
import BoardSetup from './components/BoardSetup/BoardSetup';
import ListSetup from './components/ListSetup/ListSetup';
import InviteTeam from './components/InviteTeam/InviteTeam';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/board-setup" element={<BoardSetup />} />
        <Route path="/list-setup" element={<ListSetup />} />
        <Route path="/invite-team" element={<InviteTeam />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/"
          element={
            <div className="app">
              <Navbar />
              <main>
                <Hero />
                <ProductivitySection />
                <MessageToAction />
                <IntegrationSection />
                <WorkSmarter />
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
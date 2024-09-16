import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Course from './components/Course';
import AdminPanel from './components/AdminPanel';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';  // Import the Navbar
import './Style.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />  {/* Add the Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/home/Home';
import Footer from './components/common/Footer';
import BookAppointment from './components/common/BookAppointment';
import AboutPage from './pages/about/About';
import Services from './pages/service/Services';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
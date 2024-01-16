import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import GetStarted from "./Components/GetStarted/GetStarted";
import Services from "./Pages/Services";
import ContactForm from "./Pages/ContactForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        <GetStarted />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

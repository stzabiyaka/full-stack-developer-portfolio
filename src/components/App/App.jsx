import { Routes, Route } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

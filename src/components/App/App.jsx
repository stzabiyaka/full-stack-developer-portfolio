import { Routes, Route } from "react-router-dom";
// import AppBar from "../AppBar/AppBar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

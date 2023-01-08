import { Routes, Route } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

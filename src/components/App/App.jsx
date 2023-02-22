import { Routes, Route } from 'react-router-dom';
// import AppBar from "../AppBar/AppBar";
import Hero from '../Hero/Hero';
import ProjectsList from '../ProjectsList';
import Contact from '../Contact';
import NavBar from '../NavBar';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="projects" element={<ProjectsList />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

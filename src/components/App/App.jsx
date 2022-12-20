import AppBar from "../AppBar/AppBar";
import Hero from "../Hero/Hero";
// import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <Hero />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
};

export default App;

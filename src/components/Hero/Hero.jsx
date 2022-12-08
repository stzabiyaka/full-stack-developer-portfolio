import logo from "../../logo.svg";
import { CONSTANTS } from "../../constants/constants";
import "./Hero.scss";

const { title, name, familyName } = CONSTANTS;

const Hero = () => {
  return (
    <section id="hero" className="hero__section">
      <p className="hero__name">
        <span className="hero__name-span">{name}</span>&nbsp;
        {familyName}
      </p>
      <h1 className="hero__title">{title}</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </section>
  );
};

export default Hero;

import { CONSTANTS } from "../../constants/constants";
import "./Hero.scss";

const { title, name, familyName, about, icons, stack } = CONSTANTS;

const Hero = () => {
  return (
    <section id="home" className="hero__section">
      <p className="hero__name">
        <span className="hero__name-span">{name}</span>&nbsp;
        {familyName}
      </p>
      <div className="hero__container">
        <div className="hero__details">
          <img src="" alt="" className="hero__image" />
          <p className="hero__about">{about}</p>
          <h1 className="hero__title">{title}</h1>
        </div>
        <ul className="hero__stack">
          {stack.map((icon) => (
            <li className="hero__stack-item" key={icon} title={icon}>
              <svg className="hero__stack-icon" aria-label={`${icon} icon`}>
                <use href={`${icons}#icon-${icon}`} />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;

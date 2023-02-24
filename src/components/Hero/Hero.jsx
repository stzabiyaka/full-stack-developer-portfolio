import { Link } from 'react-router-dom';
import { CONSTANTS } from '../../constants/constants';
import Section from '../Section/Section';
import Carousel from '../Carousel/Carousel';
import './Hero.scss';

const { title, name, familyName, about, stack } = CONSTANTS;

const Hero = () => {
  return (
    <Section id="home">
      <div className="hero">
        <p className="hero__greeting">
          Hello! I am&nbsp;
          <span className="hero__greeting-span">{name}</span>&nbsp;
          {familyName}
        </p>
        <h1 className="hero__title">{title}</h1>
        <div className="hero__details">
          <div className="hero__picture">
            {/* <img src="" alt="" className="hero__picture-image" /> */}
            <Carousel images={stack} />
          </div>
          <div className="hero__about">
            <p className="hero__about-text">{about}</p>
            <p className="hero__about-text">
              You can see recent{' '}
              <Link to="/projects" className="hero__about-link" title="Go to projects page">
                projects
              </Link>
              , which I developed individually, or participated as a team member.
            </p>
            <p className="hero__about-text">
              Please, feel free to{' '}
              <Link to="/contact" className="hero__about-link" title="Go to contact details page">
                contact
              </Link>{' '}
              me.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;

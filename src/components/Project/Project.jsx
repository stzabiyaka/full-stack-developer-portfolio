import { useState, useRef } from 'react';
import { CONSTANTS } from '../../constants/constants';

import './Project.scss';

const { icons, images } = CONSTANTS;

const Project = ({ project }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const closeBtnRef = useRef();

  const { name, page, description, image, stack, repository, role, type } = project;

  const handleProjectClick = event => {
    setIsDetailsVisible(true);
  };

  const handleCloseBtnClick = event => {
    event.stopPropagation();
    setIsDetailsVisible(false);
  };

  return (
    <li
      className="project"
      onClick={handleProjectClick}
      title={!isDetailsVisible ? 'Click to see details' : ''}
    >
      <article className="project__article">
        <div className="project__overlay-container">
          <div className={`project__overlay${isDetailsVisible ? ' is-visible' : ''}`}>
            <button
              className="close-button"
              onClick={handleCloseBtnClick}
              ref={closeBtnRef}
              title="Close"
            >
              <svg className="close-button__icon" aria-label="Close icon">
                <use href={`${icons}#icon-close-overlay`} />
              </svg>
            </button>
            <p className="project__description">{description}</p>
            <div className="project__details">
              <p className="project__details-title">Type:</p>
              <p className="project__details-text">{type}</p>
            </div>
            <div className="project__details">
              <p className="project__details-title">Role:</p>
              <p className="project__details-text">{role}</p>
            </div>
            <ul className="project__stack">
              {stack.map((tech, indx) => (
                <li className="project__stack-item" key={tech + indx}>
                  <svg className="project__stack-icon" aria-label="Technology icon">
                    <use href={`${icons}#icon-${tech}`} />
                  </svg>
                </li>
              ))}
            </ul>
            <ul className="project__links">
              <li className="project__links-item" key={page}>
                <a
                  href={page}
                  className="project__link"
                  title={`Open ${name} webpage`}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  Page
                </a>
              </li>
              {repository.map(({ link, title }) => (
                <li className="project__links-item" key={link}>
                  <a
                    href={link}
                    className="project__link"
                    title={`Open ${title}`}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <picture className="project__image">
            <source
              srcSet={`${images[image + 'MobileWebp']} 320w, ${
                images[image + 'MobileRetinaWebp']
              } 640w`}
              media="(max-width: 767px)"
              sizes="320px"
              type="image/webp"
            />
            <source
              srcSet={`${images[image + 'TabletWebp']} 360w, ${
                images[image + 'TabletRetinaWebp']
              } 720w`}
              media="(min-width: 768px) and (max-width: 1599px)"
              sizes="360px"
              type="image/webp"
            />
            <source
              srcSet={`${images[image + 'DesktopWebp']} 400w, ${
                images[image + 'DesktopRetinaWebp']
              } 800w`}
              media="(min-width: 1600px)"
              sizes="400px"
              type="image/webp"
            />
            <source
              srcSet={`${images[image + 'Mobile']} 320w, ${images[image + 'MobileRetina']} 640w`}
              media="(max-width: 767px)"
              sizes="320px"
            />
            <source
              srcSet={`${images[image + 'Tablet']} 360w, ${images[image + 'TabletRetina']} 720w`}
              media="(min-width: 768px) and (max-width: 1599px)"
              sizes="360px"
            />
            <source
              srcSet={`${images[image + 'Desktop']} 400w, ${images[image + 'DesktopRetina']} 800w`}
              media="(min-width: 1600px)"
              sizes="360px"
            />
            <img src={images[`${image}Tablet`]} loading="lazy" alt={name} />
          </picture>
        </div>
        <h3 className="project__title">{name}</h3>
      </article>
    </li>
  );
};

export default Project;

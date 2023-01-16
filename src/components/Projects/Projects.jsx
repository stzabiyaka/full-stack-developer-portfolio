import { CONSTANTS } from "../../constants/constants";
import Section from "../Section/Section";
import "./Projects.scss";

const { projects, images } = CONSTANTS;

const Projects = () => {
  return (
    <Section id="projects" title="recent projects">
      <ul className="projects__list">
        {projects.map((project, indx) => {
          const { name, link, description, image } = project;

          return (
            <li className="projects__list-item" key={name + indx}>
              <article className="project">
                <a
                  href={link}
                  className="project__link"
                  target="_blank"
                  title={`Open ${name} project`}
                  rel="noreferrer noopener nofollow"
                >
                  <div className="project__overlay-container">
                    <div className="project__overlay">
                      <p className="project__description">{description}</p>
                    </div>
                    <picture className="project__image">
                      <source
                        srcSet={`${images[image + "MobileWebp"]} 320w, ${
                          images[image + "MobileRetinaWebp"]
                        } 640w`}
                        media="(max-width: 767px)"
                        sizes="320px"
                        type="image/webp"
                      />
                      <source
                        srcSet={`${images[image + "TabletWebp"]} 360w, ${
                          images[image + "TabletRetinaWebp"]
                        } 720w`}
                        media="(min-width: 768px)"
                        sizes="360px"
                        type="image/webp"
                      />
                      <source
                        srcSet={`${images[image + "Mobile"]} 320w, ${
                          images[image + "MobileRetina"]
                        } 640w`}
                        media="(max-width: 767px)"
                        sizes="320px"
                      />
                      <source
                        srcSet={`${images[image + "Tablet"]} 360w, ${
                          images[image + "TabletRetina"]
                        } 720w`}
                        media="(min-width: 768px) and (max-width: 1199px)"
                        sizes="360px"
                      />
                      <img
                        src={images[`${image}Tablet`]}
                        loading="lazy"
                        alt={name}
                      />
                    </picture>
                  </div>
                  <h3 className="project__title">{name}</h3>
                </a>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Projects;

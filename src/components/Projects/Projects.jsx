import { CONSTANTS } from "../../constants/constants";
import Section from "../Section/Section";
import "./Projects.scss";

const { projects, images } = CONSTANTS;

const Projects = () => {
  return (
    <Section id="projects" title="projects">
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
                  <div class="project__overlay-container">
                    <div className="project__overlay">
                      <p className="project__description">{description}</p>
                    </div>
                    <img
                      className="project__image"
                      src={images[`${image}Tablet`]}
                      alt={name}
                    />
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

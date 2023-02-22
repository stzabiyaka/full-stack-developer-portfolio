import { useState } from 'react';
import { CONSTANTS } from '../../constants/constants';
import Section from '../Section/Section';
import Project from '../Project/Project';
import Paginator from '../Paginator/Paginator';
import './ProjectsList.scss';

const { projects } = CONSTANTS;
const itemsPerPage = 6;
const totalPages = Math.ceil(projects.length / itemsPerPage);
const showPagination = totalPages > 1;

const ProjectsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsShift = (currentPage - 1) * itemsPerPage;
  const projectsPage = projects.slice(itemsShift, itemsShift + itemsPerPage);

  return (
    <Section id="projects" title="recent projects">
      <ul className="projects__list">
        {projectsPage.map((project, indx) => (
          <Project project={project} key={project.name + indx} />
        ))}
      </ul>
      {showPagination && (
        <Paginator
          totalPages={totalPages}
          startPage={currentPage}
          onPageSelect={page => setCurrentPage(page)}
        />
      )}
    </Section>
  );
};

export default ProjectsList;

import React from "react";

function ProjectItem({ name, about, technologies }) {

  const allTechnologies = technologies.map((technology, index) => <span key={index}>{technology}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {allTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;

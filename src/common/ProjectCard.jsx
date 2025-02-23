import React from 'react';

function ProjectCard({ src, link, h3, p, imgStyle }) {
  return (
    <a href={link} target="_blank" className="projectCard">
      <img className="projectImage" src={src} alt={`${h3} logo`} style={imgStyle} /> {/* ✅ Apply imgStyle */}
      <h3 className="projectTitle">{h3}</h3>
      <p className="projectDescription">{p}</p>
    </a>
  );
}

export default ProjectCard;

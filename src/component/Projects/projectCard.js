import React from 'react';
import './Projects.css';


const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    liveUrl,
    projectUrl
}) => {
    return ( 
        <div className="project-card">
            <div className="image-container">
                <a href={projectUrl} className="project-external-link">
                    <img src={imageUrl} alt="project" className="project-image" />
                </a>
            </div>

            <div className="project-details-conainer">
                <h2 className="prject-heading">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
                <a href={liveUrl} className="project-wathc-live">watch live !</a>
            </div>
        </div>
     );
}

export default ProjectCard;

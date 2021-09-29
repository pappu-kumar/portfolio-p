import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import {projectsData} from './../../assets/projectsData';
import ProjectCard from './projectCard';
import './Projects.css';


const Projects = () => {
    return (  
        <div className="section-container">
            <Header 
            heading = "My Projects."
            details = "here are a few cool things which is i have created!"
            />

            <div className='project-cards-container'>
                {projectsData.map(({
                projectName,
                projectDescription,
                imageUrl,
                liveUrl,
                projectUrl
             }) => {
                        return <ProjectCard
                            projectName = {projectName}
                            projectDescription ={projectDescription}
                            projectUrl={projectUrl}
                            imageUrl={imageUrl}
                            liveUrl={liveUrl} 
                            />
                })}
            </div>

            <FooterLink phrase="Chek out " link="my skills!" toAdress="/skills" />
        </div>
    );
};
 
export default Projects;

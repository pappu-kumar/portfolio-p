import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { skillList}  from './../../assets/skillsData';
import SkillCard from './SkillsCard';
import './Skills.css';
import skillsVector from './../../assets/about_vector.png';

const Skills = () => {
    return ( 
        <div className="section-container">
            <Header
             heading="My Skills."
             details="these all are my skills and i have made projects from using these skills!"
             />

             {/* skills card */}
             <div className="skill-card-container">
                 { skillList.map(({ skillName, skillUrl }) =>(
                         <SkillCard skillName ={skillName} skillUrl={skillUrl} />
                  ))}
             </div>

             <FooterLink phrase="Get in " link="touch" toAdress="/contact" />
            
            <div className="skills-vector-frame">
                <img src={skillsVector} alt="skilss" className="skills-vector"/>
            </div>
        </div>
     );
};
 
export default Skills;

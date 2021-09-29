import React from 'react'
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';
import './About.css';
import FooterLink from '../FooterLink/FooterLink';

const About = () => {
    return (
        <div className="section-container">
            <Header
              heading = "About Me."
              details = "I am Full stack web devloper, I have been devloping things from last Two years!"
            />


            <div className="about-main">
                <div className="about-main-left">
                    {/* {sub section 1} */}
                    <h3 className="about-sub-head">Responsive</h3>
                    <p className="about-details">
                        My layouts will work on any device, big or small. {' '}
                        {/* <a className="about-link-element" href="http:/theleanprogrammer.com/aam">
                            my free react courses
                        </a> */}
                    </p>
                    {/* sub section 2 */}
                    <h3 className="about-sub-head">Dynamic</h3>
                    <p className="about-details">
                        Websites don't have to be static, I love making pages come to life. {' '}
                        {/* <a className="about-link-element" href="http:/theleanprogrammer.com/aam">
                            my free react courses
                        </a> */}
                    </p>
                    {/* subsection 3 */}
                    <h3 className="about-sub-head">Current Focus</h3>
                    <p className="about-details">
                        {/* As a web developer, I enjoy using my obsessive attention to detail,
                        my unequivocal love for making things, and my mission-driven work ethic
                        to literally change the world. That's why */}
                        I’m excited to make a big impact at a high growth company.{' '}
                        {/* <a className="about-link-element" href="http:/theleanprogrammer.com/aam">
                            my free react courses
                        </a> */}
                    </p>
                </div>
                <div className="about-main-right">
                        <img src={aboutAnime} alt="anime" className="about-anime" />
                </div>
            </div>


            <FooterLink phrase="Check out my " 
                link="projects!"
                toAdress="/projects"
            />
            {/* vector frame */}
            <div className="vector-frame">
                <img src={aboutVector} alt="animation" className="about-vector" />
            </div>
        </div>
    );
};

export default About;

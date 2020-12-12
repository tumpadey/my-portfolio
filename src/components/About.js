import React from 'react';
import api from '../images/icons/api.svg';
const skills = [
    {
        icon:api,
        title: "Lorem ipsum dolor sit",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        icon:api,
        title: "Lorem ipsum dolor sit",
        about:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
]

const About = () => {
    return (
        <div className="about">
          <h5 className="about_intro">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quos nihil saepe.  
          </h5>
          <div className="container about_container">
              <h6 className="about_heading">What I offer</h6>
              <div className="row">
                 {
                     skills.map(skill =>
                        <div className="col-lg-6">
                             <div className="skill-card">
                                 <img src={skill.icon} alt="icon" className="skill-card_icon"/>
                                <div className="skill-card-body">
                                  <h6 className="skill-card_title">{skill.title}</h6> 
                                  <p className="skill_card_content">{skill.about}</p>
                                </div>
                             </div>
                        </div>
                        )
                 }
              </div>
          </div>
        </div>
    );
};

export default About;
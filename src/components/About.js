import React from 'react';
import computer from '../images/icons/computer.svg';
import repair from '../images/icons/repair.svg';
import api from '../images/icons/api.svg';
import algo from '../images/icons/algo.svg';
import puzzel from '../images/icons/puzzle.svg';


import Skillcard from './Skillcard';
const skills = [
    {
        icon:computer,
        title: "Frontend Development",
        about:"I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon:repair,
        title: "Backend Development",
        about:"handle database, server,api using and SQL"
    },
    {
        icon:api,
        title: "Api Development",
        about:"I can develop robust REST API using django-rest-api"
    },
    {
        icon:algo,
        title: "Competitve Coder",
        about:" a daily problem solver HackerRank and Leetcode"
    },
    {
        icon:puzzel,
        title: "UI/UX designer",
        about:"minimalistic user interface designer using figma and framer "
    },
    {
        icon:computer,
        title: "Whatever",
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
                        <Skillcard skill={skill} />
                        )
                 }
              </div>
          </div>
        </div>
    );
};

export default About;
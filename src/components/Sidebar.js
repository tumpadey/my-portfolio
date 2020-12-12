import React from 'react';

import facebook from '../images/icons/facebook.svg';
import instagram from '../images/icons/instagram.svg';
import github from '../images/icons/github.svg';
import pin from '../images/icons/pin.svg';
import tie from '../images/icons/tie.svg';
import mightycoder from '../images/mighty-coder.svg';
import resume from '../images/resume.pdf';
const Sidebar = () => {
    const handleEmailMe = () =>{
        window.open("mailto:tumpadey20000@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar_avatar"/>
            <div className="sidebar_name">Tumpa <span>Dey</span></div>
            <div className="sidebar_item sidebar_title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar_item sidebar_resume">
                    <img src={tie} alt="resume" className="sidebar_icon"/>Download Resume
                </div>
            </a>
            <figure className="sidebar_social-icons my-2">
               <a href="#"><img src={facebook} alt="facebook" className="sidebar_icon mr-3"/></a>
               <a href="#"><img src={instagram}alt="instagram" className="sidebar_icon mr-3"/></a>
            </figure>
            <div className="sidebar_contact">
                <div className="sidebar_item sidebar_github">
                    <a href="#"><img src={github} alt="github" className="sidebar_icon mr-3"/>github</a>
                </div>
                <div className="sidebar_location"> 
                    <img src={pin} alt="location" className="sidebar_icon mr-3"/>
                     Tongi, Gazipur 
                </div>
                <div className="sidebar_item">tumpadey20000@gmail.com</div>
                <div className="sidebar_item">01784352490</div>
            </div>
            <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>email me</div>
        </div>
    );
};

export default Sidebar;
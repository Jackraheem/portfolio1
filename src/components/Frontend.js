import React from 'react';
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandBootstrap } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


const Frontend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Frontend Developer</h3>
        <div className="skills_box">
        <div className="skills_group">
            <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name"><IoLogoHtml5 />HTML</h3>
                    <span className="skills_level">Advanced</span>
                </div>
   
            </div>
            <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name"><IoLogoCss3 />CSS</h3>
                    <span className="skills_level">Advanced</span>
                </div>
   
            </div>
            <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name"><IoLogoJavascript />Javascript</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
   
            </div>
        </div>
        <div className="skills_group">
            <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name"><TbBrandBootstrap />Bootstrap</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
   
            </div>
            <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name"><FaGitAlt />Git</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
   
            </div>
            <div className="skills_data">
                <i class="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name"><FaReact />React.js</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
   
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Frontend

import React from 'react';
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiDotnet } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";


const Backend = () => {
  return (
    <div className="skills_content">
    <h3 className="skills_title">Backend Developer</h3>

    <div className="skills_box">
    <div className="skills_group">
        <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
                <h3 className="skills_name"><FaNodeJs />Node.js</h3>
                <span className="skills_level">Intermediate</span>
            </div>

        </div>
        <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
                <h3 className="skills_name"><FaPhp />PHP</h3>
                <span className="skills_level">Basics</span>
            </div>

        </div>
        <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
                <h3 className="skills_name"><SiPython />Python</h3>
                <span className="skills_level">Intermediate</span>
            </div>

        </div>
    </div>
    <div className="skills_group">
        <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
                <h3 className="skills_name"> <GrMysql />MySQL</h3>
                <span className="skills_level">Intermediate</span>
            </div>

        </div>
        <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
                <h3 className="skills_name"><SiDotnet />ASP.Net</h3>
                <span className="skills_level">Intermediate</span>
            </div>

        </div>
        <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
                <h3 className="skills_name"><AiOutlineApi />REST API's</h3>
                <span className="skills_level">Intermediate</span>
            </div>

        </div>
    </div>
    </div>
   
</div>
  )
}

export default Backend


import React, {useState}from 'react';
import './Qualifi.css';

const Qualifi = () => {
    const[toggleState,setToggleState] = useState(1);
    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
   <section className="qualification sections">
    <h2 className="section_title">Qualification</h2>
    <span className="section_subtitle">My Personal Journey</span>

    <div className="qualification_container container">
        <div className="qualifications_tabs">
            <div className={toggleState === 1 ?"qualification_button qualification_active button--flex" :"qualification_button button--flex"}onClick={()=>toggleTab(1)} title='Click Me'>
                <i className="uil uil-graduation-cap qualification_icon"></i>Eduaction
            </div>
            <div className={toggleState === 2 ?"qualification_button qualification_active button--flex" :"qualification_button button--flex"} onClick={()=>toggleTab(2)} title='Click Me'>
                <i className="uil uil-briefcase-alt  qualification_icon"></i>Experience
            </div>
        </div>
        <div className="qualification_sections">
            <div className={toggleState === 1 ? "qualification_content qualification_content-active": "qualification_content"}>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">B.Tech<br/> Computer Science<br/>Engineering</h3>
                        <span className="qualification_subtitle">A1 Global institute <br/>of Engneering</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>2019-2023
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>


                <div className="qualification_data">
                    <div></div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">12+ Intermediate</h3>
                        <span className="qualification_subtitle">M.N.M Junior College</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>2017-2019
                        </div>
                    </div>
                   
                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">10th SSC</h3>
                       
                        <span className="qualification_subtitle">Aditya High School</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>2017
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

            </div>
            <div className={toggleState === 2 ? "qualification_content qualification_content-active": "qualification_content"}>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">web Development<br/> Intership</h3>
                        <span className="qualification_subtitle">Pantech Elearning</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>2022-2023
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>


                <div className="qualification_data">
                    <div></div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Python development<br/>Internship</h3>
                        <span className="qualification_subtitle">SkillBuzz</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>1 month 2022
                        </div>
                    </div>
                   
                </div>

                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Software Development Internship</h3>
                        <span className="qualification_subtitle">Besant Technologies</span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>2024
                        </div>
                    </div>
                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>


              
            </div>
        </div>
    </div>
   </section>
  )
}

export default Qualifi;

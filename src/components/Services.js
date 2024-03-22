import React, { useState } from 'react';
import './Services.css';

const Services = () => {
    const[toggleState,setToggleState] = useState(0);
    const toggleTab = (index)=>{
        setToggleState(index);
    }

  return (
   <section className="services section" id="services">
    <h2 className="section_title">Services</h2>
    <span className="section_subtitle">What i Offer</span>

    <div className="services_container container grid">
        <div className="services_content">
            <div>
                <i className="uil uil-web-grid services_icon"></i>
                <h3 className="services_title">Product <br/> Designer</h3>
            </div>
            <span className="services_button" onClick={()=>toggleTab(1)}>View more
            <i className="uil uil-arrow-right service_button-icon"></i>
            </span>

            <div  className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_model-content">
                    <i  onClick={()=>toggleTab(0)}className="uil uil-times services_modal-close"></i>
                    <h3 className="services_modal-title">product Designer</h3>
                    <p className="services_modal-description">Service with more than 1 years of experience.Providing quality work to clients and companies.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I develop the user interface.
                            </p>
                        </li>

                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            Web page development.
                            </p>
                        </li>

                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I create ux element interactions.
                            </p>
                        </li>
                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I position your company brand.
                            </p>
                        </li>
                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            Design and mockups of products for companies.
                            </p>
                        </li>


                        

                        

                        
                    </ul>
                </div>
            </div>
        </div>

        <div className="services_content">
            <div>
                <i class="uil uil-arrow service_icon"></i>
                <h3 className="services_title"> Web <br/> development</h3>
            </div>
            <span className="services_button" onClick={()=>toggleTab(2)}>View more<i className="uil uil-arrow-right service_button-icon"></i></span>

            <div  className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_model-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
                    <h3 className="services_modal-title">Web developer </h3>
                    <p className="services_modal-description">Service with more than 1 years of experience.Providing quality work to clients and companies.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I develop the user interface,and handle all interactions with server
                            </p>
                        </li>

                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I can develop React.js based projects
                            </p>
                        </li>

                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I can develop backend Scripting.
                            </p>
                        </li>
                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I can create API's by using REST and GraphQl Technologies
                            </p>
                        </li>
                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I can handle the server-side rendering 
                            </p>
                        </li>


                        

                        

                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="services_content">
            <div>
                <i className="uil uil-edit services_icon"></i>
                <h3 className="services_title">Python <br/>development</h3>
            </div>
            <span className="services_button" onClick={()=>toggleTab(3)}>View more
            <i className="uil uil-arrow-right service_button-icon"></i>
            </span>

            <div  className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_model-content">
                    <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
                    <h3 className="services_modal-title">Python developer</h3>
                    <p className="services_modal-description">Service with more than 1 years of experience.Providing quality work to clients and companies.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I can Perform back end based operations. 
                            </p>
                        </li>

                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                              I can create API'S using REST API.
                            </p>
                        </li>

                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I create ux element interactions With Django.
                            </p>
                        </li>
                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I position your company brand.
                            </p>
                        </li>
                        <li className="services_modalservice" >
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            Design and mockups of products for companies.
                            </p>
                        </li>


                        

                        

                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Services

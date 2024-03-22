import React from 'react';
import './Testimonials.css';
import { Data1 } from './Data1';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";


const Testimonials = () => {
  return (
    <div>
        <section className="testimonial container section" id='portfolio'>
        <h2 className="section_title">Projects</h2>
    <span className="section_subtitle">My Hands on Projects</span>

    <Swiper className="testimonials_container"
     loop={true}
     grabCursor={true}
     spaceBetween={24}
     pagination={{
       clickable: true,
     }}
     breakpoints={{
       576: {
         slidesPerView: 2,
         
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 48,
       },
      
     }}
     modules={[Pagination]}
    
    >
      {Data1.map(({id,image,title,description,link1,link})=>{
        return(
          <SwiperSlide className="testimonal_card" key={id}>
            <img src={image} alt='' className="testimonial_img"/>
            <h3 className="testimonial_name">{title}</h3>
            <p className="testimonial_description">{description}</p>
            <a href={link1} target="_blank" rel="noopener noreferrer">
            <button className="linkButton1">Code <span className="up"><FaCode/></span> </button>
          </a>
          &nbsp; &nbsp;
            <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="linkButton2">Link <span className="up"><FaLink/></span></button>
          </a>


          </SwiperSlide>
        );
      })}
    </Swiper>
    


        </section>
      
    </div>
  )
}

export default Testimonials

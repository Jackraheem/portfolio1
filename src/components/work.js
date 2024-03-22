import React from 'react';
import Works from './works';
import "./work.css";

const work = () => {
  return (
    <div> 
        <section className="work section" >
            <h2 className="section_title">portfolio</h2>
            <span className="section_subtitle">
                Most recent works
            </span>
            <Works/>


        </section>
      
    </div>
  )
}

export default work

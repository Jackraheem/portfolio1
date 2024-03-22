// import React, { useState } from 'react';
// import { projectsData } from './Data2';
// import { projectsNav } from './Data2';
// import  WorkItems  from './workItems';
 
// const works = () => {
//     const [item, setItem] = useState()


//   return (
//    <div>
//      <div className="work_filters">
//         {projectsNav.map((item,index)=>{
//             return(
//                 <span className="work_item" key={index}>{item.name}</span>
//             );
//         })}
        
//       </div>
//       <div className="work_container container grid">
//         {projectsData.map((item) =>{
//             return <WorkItems  item={item} key={item.id}/>

//         })}
//       </div>
//    </div>
   
//   )
// }

// export default works;
import React, { useEffect, useState } from 'react';
import { projectsData } from './Data2';
import { projectsNav } from './Data2';
import WorkItems from './workItems';

const Works = () => {
  // Remove unused state variable 'setItem' if not needed
   const [item, setItem] = useState({name:'all'});
   const [projects, setProjects] = useState([]);
   const [active, setActive] = useState(0);

   useEffect(()=>{
    if(item.name ===  "all"){
        setProjects(projectsData);
    }
    else{
        const newProjects = projectsData.filter((project)=>{
            return project.category.toLowerCase() === item.name;
        });
        setProjects(newProjects)
    }
   },[item]);
   const handleClick = (e,index)=>{
    setItem({name:e.target.textContent.toLowerCase() });
    setActive(index);
   }

  return (
    <div>
      <div className="work_filters">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e)=>{
                handleClick(e,index);
            }} className={`${active === index ? 'active-work' : ""} work_item`} key={index}>
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work_container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;


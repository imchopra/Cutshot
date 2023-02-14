import "./WorkCardStyles.css";
import React from 'react';
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";


const Work = () => {
  return (
  
    <div className="work-container">
      <h1 className="project-heading">Work</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
            return(
                <WorkCard 
                key={ind}
                title={val.title}
                text={val.text}
                />
            );
        })}
      </div>  
    </div>
  )
}

export default Work;

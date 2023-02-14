import "./WorkCardStyles.css";
import React from 'react';


const WorkCard = (props) => {
  return (
 
    <div className="project-card">
      
      <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <a href="/about" className="btn">Learn More</a>
              </div>
          </div>
      </div>
     
  )
}

export default WorkCard

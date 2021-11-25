import React from 'react'
import './CourseItem.css'
// import Html from '../assets/images/react.png';


const CourseItem = ({img, title, paragraph, link, span, view}) => {
    return (
        <>
        <div className="box">
            <img src={img} alt=""/>
            <div className="info">
                <h3>{title}</h3>
                <span>{span}</span>
                <p>{paragraph}</p>
                <a href={link} className="btn" target='blank'>{view} online</a>
            </div>
        </div>   
        </>
    )
}

export default CourseItem

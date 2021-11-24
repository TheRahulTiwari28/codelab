import React from 'react'
import './CourseItem.css'
// import Html from '../assets/images/react.png';


const CourseItem = ({img, title, paragraph, link, span}) => {
    return (
        <>
        <div class="box">
            <img src={img} alt=""/>
            <div class="info">
                <h3>{title}</h3>
                <span>{span}</span>
                <p>{paragraph}</p>
                <a href={link} class="btn" target='blank'>Watch online</a>
            </div>
        </div>   
        </>
    )
}

export default CourseItem

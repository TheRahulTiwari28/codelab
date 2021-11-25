import React from 'react'
import './Reviews.css'

const Reviews = ({image, name, profession, view}) => {
    return (
        <>
        <div className="box">
            <div className="student">
                <div className="student-info">
                    <img src={image} alt="images"/>
                    <div className="info">
                        <h3>{name}</h3>
                        <span>{profession}</span>    
                    </div>
                </div>
                <i className="fas fa-quote-right"></i>
            </div>
            <p className="text">{view}</p>
        </div>
        </>
    )
}

export default Reviews

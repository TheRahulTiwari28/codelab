import React from 'react'
import { NavLink } from 'react-router-dom'
import './Teachers.css'

const Teachers = ({img, name, course, para, insta, facebook, linkedin}) => {
    return (
        <>
        <div className="box">
            <img src={img} alt="images"/>
            <h3>{name}</h3>
            <span>{course}</span>
            <p>{para}</p>
            <div className="share">
                <NavLink to="/" className="fab fa-facebook-f"> </NavLink>
                <NavLink to="/" className="fab fa-instagram"> </NavLink>
                <NavLink to="/" className="fab fa-linkedin"> </NavLink>
            </div>
        </div>
        </>
    )
}

export default Teachers

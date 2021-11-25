import React, { useState } from "react"
import './Navbar.css'
import { FiAlignJustify } from "react-icons/fi"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [Show, SetShow] = useState(false)
    return (
        <>
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <NavLink to="index.html" className="nav-logo">
                        <h1>LanguageLab</h1>
                    </NavLink>
                    <button className="nav-btn" onClick={() => SetShow(!Show)}>
                        <FiAlignJustify />
                    </button>
                </div>
                <div className={Show ? "nav-links show-links" : "nav-links"}>
                    <NavLink to="/" exact className="nav-link" activeClassName="active-link" onClick={() => SetShow(false)}>Home</NavLink>
                    <NavLink to="/course" exact className="nav-link" activeClassName="active-link" onClick={() => SetShow(false)}>Language</NavLink>
                    <NavLink to="/teacher" exact className="nav-link" activeClassName="active-link" onClick={() => SetShow(false)}>Teacher</NavLink>
                    <NavLink to="/review" exact className="nav-link" activeClassName="active-link" onClick={() => SetShow(false)}>Reviews</NavLink>
                    <div className="nav-link contact-link" activeClassName="active-link" onClick={() => SetShow(false)}>
                        <NavLink to="/contact" exact className="btn" activeClassName="active-link" onClick={() => SetShow(false)}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        </>
            
    )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>about us</h3>
                        <p>“If you want to teach people a new way of thinking, don’t bother trying to teach them. Instead, give them a tool, the use of which will lead to new ways of thinking.”</p>
                    </div>
                    <div className="box">
                        <h3>quick links</h3>
                        <NavLink to="/">home</NavLink>
                        <NavLink to="/course">Language</NavLink>
                        {/* <NavLink to="/">teacher</NavLink>
                        <NavLink to="/">price</NavLink>
                        <NavLink to="/">review</NavLink> */}
                        <NavLink to="/contact">contact</NavLink>
                    </div>
                    <div className="box">
                        <h3>follow us</h3>
                        <NavLink to="https://www.facebook.com/profile.php?id=100043219863014" target="blank">facebook</NavLink>
                        <NavLink to="https://www.instagram.com/_i_am_rahul_9/" target="blank">instagram</NavLink>
                        <NavLink to="https://www.linkedin.com/in/rahul-tiwari-6a90051b4/" target="blank">linkedin</NavLink>
                    </div>
                    <div className="box">
                        <h3>contact us</h3>
                        <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
                        <p> <i className="fas fa-envelope"></i> codelab@gmail.com </p>
                        <p> <i className="fas fa-map-marker-alt"></i> mumbai, india - 400016 </p>
                    </div>
                </div>
                <div className="credit"> created by <span>Rahul Tiwari</span> | 2021</div>
            </section>
        </div>
    )
}

export default Footer

import React from 'react'
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
                        <a href="/">home</a>
                        <a href="/course">Language</a>
                        {/* <a href="/">teacher</a>
                        <a href="/">price</a>
                        <a href="/">review</a> */}
                        <a href="/contact">contact</a>
                    </div>
                    <div className="box">
                        <h3>follow us</h3>
                        <a href="https://www.facebook.com/profile.php?id=100043219863014" target="blank">facebook</a>
                        <a href="https://www.instagram.com/_i_am_rahul_9/" target="blank">instagram</a>
                        <a href="https://www.linkedin.com/in/rahul-tiwari-6a90051b4/" target="blank">linkedin</a>
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

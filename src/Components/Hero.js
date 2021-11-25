import React from 'react'
import './Hero.css'
import HomeImg from '../assets/images/home-img.svg'

const Hero = () => {
    return (
        <div>
            <section className="home">

                <div className="content">
                    <h3>E-learning is a better way of learning</h3>
                    <p>“Online learning is rapidly becoming one of the most cost-effective ways to educate the world’s rapidly expanding workforce.”</p>
                    <a href="/" className="btn">get started</a>
                </div>

                <div className="image">
                    <img src={HomeImg} alt=""/>
                </div>

            </section>
        </div>
    )
}

export default Hero

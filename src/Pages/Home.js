import React from 'react'
import CourseItem from '../Components/CourseItem'
import Hero from '../Components/Hero'
import Html from '../assets/images/html1.webp';
import Css from '../assets/images/css-logo-.svg';
import bootstrap from '../assets/images/bootstrap.png';
import JavaScript from '../assets/images/JScript.png';

const Home = () => {
    return (
        <>
            <Hero/>
            <section class="movies" id="movies">
                <h1 className="heading">Language</h1>
                <div class="box-container">
                <CourseItem
                    img={Html}
                    title="HTML"
                    span="Hypertext Markup Language"
                    paragraph="The HTML is the standard markup language for documents designed to be displayed in a web browser.  It can be assisted by technologies such as CSS and JavaScript."
                    link="https://www.youtube.com/playlist?list=PL0b6OzIxLPbxStBQ21C2toa5uQMqHEoRT"
                />
                <CourseItem
                    img={Css}
                    title="CSS"
                    span="Cascading Style Sheets"
                    paragraph="CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML."
                    link="https://www.youtube.com/playlist?list=PL0b6OzIxLPbzDsI5YXUa01QzxOWyqmrWw"
                />
                <CourseItem
                    img={bootstrap}
                    title="Bootstrap"
                    span="Bootstrap"
                    paragraph="Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."
                    link="https://www.youtube.com/playlist?list=PL0b6OzIxLPbz1cgxiH5KCBsyQij1HsPtG"
                />
                <CourseItem
                    img={JavaScript}
                    title="JS"
                    span="JavaScript"
                    paragraph="JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm."
                    link="https://www.youtube.com/playlist?list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf"
                />
                </div>
            </section>
        </>
    )
}

export default Home

import React from 'react'
import CourseItem from '../Components/CourseItem'
import Html from '../assets/images/html1.webp';
import Css from '../assets/images/css-logo-.svg';
import bootstrap from '../assets/images/bootstrap.png';
import JavaScript from '../assets/images/JScript.png';
import react from '../assets/images/react.png';
import ES6 from '../assets/images/es6.jpeg'
import node from '../assets/images/node-logo.png';
import MongoDB from '../assets/images/mongo.jpeg';
import Python from '../assets/images/python.png';
import redux from '../assets/images/redux.svg';
import reactNative from '../assets/images/react-native.png';
import angular from '../assets/images/Angular.png';
import vue from '../assets/images/vue-js.jpg';
import cplus from '../assets/images/C++.jpg';


const Course = () => {
    return (
        <>
        <section class="movies" id="movies">
        <h1 className="heading">Language </h1>
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
                <CourseItem
                    img={ES6}
                    title="ES6"
                    span="ECMA6"
                    paragraph="ECMAScript is a general-purpose programming language, standardised by Ecma International according to the document ECMA-262."
                    link="https://www.youtube.com/playlist?list=PLC3y8-rFHvwhI0V5mE9Vu6Nm-nap8EcjV"
                />
                <CourseItem
                    img={react}
                    title="ReactJS"
                    span="ReactJS"
                    paragraph="React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies."
                    link="https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ"
                />
                <CourseItem
                    img={angular}
                    title="Angular"
                    span="Angular"
                    paragraph="Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations."
                    link="https://angular.io/"
                />
                <CourseItem
                    img={vue}
                    title="Vue.js"
                    span="Vue.js"
                    paragraph="Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
                    link="https://vuejs.org/"
                />
                <CourseItem
                    img={node}
                    title="Node JS"
                    span="NodeJS"
                    paragraph="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
                    link="https://www.youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8"
                />
                <CourseItem
                    img={redux}
                    title="Redux"
                    span="Redux"
                    paragraph="'Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces."
                    link="https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK"
                />
                <CourseItem
                    img={MongoDB}
                    title="MongoDB"
                    span="MongpDB"
                    paragraph="MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
                    link="https://www.youtube.com/playlist?list=PLC3y8-rFHvwh11bWtwm3_qKvo46uDmaal"
                />
                <CourseItem
                    img={Python}
                    title="Python"
                    span="Python"
                    paragraph="Python is an interpreted high-level general-purpose programming language. Python design philosophy emphasizes code readability with its notable use of significant indentation."
                    link="https://www.w3schools.com/python/default.asp"
                />
                <CourseItem
                    img={cplus}
                    title="C++"
                    span="C++"
                    paragraph="C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes"
                    link="https://www.w3schools.com/cpp/default.asp"
                />
                <CourseItem
                    img={reactNative}
                    title="React Native"
                    span="React Native"
                    paragraph="React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web"
                    link="https://reactnative.dev/"
                />
                
                {/* <CourseItem
                    title=""
                    span=""
                    paragraph=""
                    link=""
                /> */}

            </div>
        </section>
        </>
    )
}

export default Course

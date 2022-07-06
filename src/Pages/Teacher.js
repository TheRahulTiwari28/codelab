import React from 'react'
import Teachers from '../Components/Teachers'
import teacher1 from '../assets/images/teacher-1.png'
import teacher2 from '../assets/images/teacher-2.png'
import teacher3 from '../assets/images/teacher-3.png'
import teacher4 from '../assets/images/teacher-4.png'
import teacher5 from '../assets/images/teacher-5.jpg'
import teacher6 from '../assets/images/teacher-6.jpg'
import teacher7 from '../assets/images/teacher-7.jpg'
import teacher8 from '../assets/images/teacher-8.jpg'
import teacher9 from '../assets/images/teacher-9.jpg'
import teacher10 from '../assets/images/teacher-10.jpg'
import teacher11 from '../assets/images/teacher-11.jpg'

const Teacher = () => {
    return (
        <>
        <div className="container">
            <h1 className="heading">Clear your all doubt with experienced people</h1>
            <section className="teacher">
                <Teachers
                    img={teacher1}
                    name="dani"
                    course="HTML/CSS"
                    para="I think it fair to say that personal computers have become the most empowering tool weve ever created. They tools of communication, they tools of creativity"
                />
                <Teachers
                    img={teacher2}
                    name="Jonn"
                    course="Javascript"
                    para="Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn."
                />
                <Teachers
                    img={teacher3}
                    name="galot"
                    course="Advance Javascript"
                    para="Coding is the language of the future, and everybody should learn it. coding is fun, collaborative and creative."
                />
                <Teachers
                    img={teacher4}
                    name="Johnson"
                    course="Css/Saas/Bootstrap"
                    para="I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12."
                />
                <Teachers
                    img={teacher5}
                    name="Evil"
                    course="React Js"
                    para="Everybody should learn to program a computer, because it teaches you how to think."
                />
                <Teachers
                    img={teacher6}
                    name="willi"
                    course="Angular/Vue"
                    para="Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains."
                />
                <Teachers
                    img={teacher7}
                    name="Tom"
                    course="Node.js"
                    para="I learned the fundamentals for programming, which is just what I needed as a first step for my career change!"
                />
                <Teachers
                    img={teacher8}
                    name="Robert"
                    course="React/Redux"
                    para="I quickly came to understand that code is a superpower every young woman should be able to access."
                />
                <Teachers
                    img={teacher9}
                    name="hank"
                    course="React Native"
                    para="When you throw yourself out there great things happen. Just take this course blindly and dive into the world of programming starting from scratch."
                />
                <Teachers
                    img={teacher10}
                    name="ford"
                    course="C++"
                    para="Everybody should learn to program a computer, because it teaches you how to think."
                />
                <Teachers
                    img={teacher11}
                    name="perry"
                    course="MongoDB"
                    para="Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains."
                />
            </section>
        </div>
            
        </>
    )
}

export default Teacher

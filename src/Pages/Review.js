import React from 'react'
import Reviews from '../Components/Reviews'
import student1 from '../assets/images/student-1.png';
import student2 from '../assets/images/student-2.png';
import student3 from '../assets/images/student-3.png';
import student4 from '../assets/images/student-4.png';
import student5 from '../assets/images/student-5.png';
import student7 from '../assets/images/student-7.jpg';
import rahul from '../assets/images/rahul.jpeg';
import student9 from '../assets/images/student-9.jpg';

const Price = () => {
    return (
        <>
        <div className="container">
            <h1 className="heading"> student's review </h1>
            <section className="review">
                <Reviews
                    image={rahul}
                    name="Rahul"
                    profession="StudentStudent"
                    view="The course was very comprehensive and easy to understand. The instructors made sure that they are giving the information in a way that wont make me confused. Thank you so much for this great course!"
                />
                <Reviews
                    image={student3}
                    name="Jay"
                    profession="Student"
                    view="This course has taught me a lot of techniques in searching information for my academic researches. Thank you to all people behind this, especially to the professors in this course!"
                />
                <Reviews
                    image={student5}
                    name="Avinash"
                    profession="Student"
                    view="A detailed review of one of the most important skills in academic research: information seeking. In particular, I enjoyed the tutorials on Mendeley and reference management tools. Highly recommended!"
                />
                <Reviews
                    image={student2}
                    name="Sakshi"
                    profession="Student"
                    view="This course has taught me a lot of techniques in searching information for my  academic researches. Thank you to all people behind this, especially to the professors in this course!"
                />
                <Reviews
                    image={student7}
                    name="Nikhil"
                    profession="Student"
                    view="Extremely valuable for researching techniques. Teachers were outstanding. Lectures are to the point without drag-on. Many thanks for the quality of your efforts!"
                />
                <Reviews
                    image={student9}
                    name="Vihaan"
                    profession="Student"
                    view="The course is structured with contents meeting the objectives of the course. Special credit to all the teachers, I left as if they were explaining it on the face. The language was very clear and understandable."
                />
                {/* <Reviews
                    image={rahul}
                    name="sanket"
                    profession="Student"
                    view="This course was extremely helpful because, as a university student, it helped me understand the proper steps toward citing and documenting my research paper and avoid plagiarism."
                /> */}
                <Reviews
                    image={student1}
                    name="Arshiya"
                    profession="Student"
                    view="The course is structured with contents meeting the objectives of the course. Special credit to all the teachers, I left as if they were explaining it on the face. The language was very clear and understandable."
                />
                <Reviews
                    image={student4}
                    name="Nidhi"
                    profession="Student"
                    view="An excellent course:  it provides learners with the concepts and skills necessary for searching and researching information in libraries and online. Lectures are clear and well organized."
                />
                {/* <Reviews
                    image={student1}
                    name=""
                    profession="Student"
                    view="An excellent course; I highly recommend it. This course gives a great overview on types of research, some coverage of databases, and using Mendeley."
                /> */}
            </section>
        </div>
        </>
    )
}

export default Price

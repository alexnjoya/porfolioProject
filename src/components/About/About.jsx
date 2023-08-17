import React from 'react'
import './About.css'
import ME from '../../asset/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'


function About() {
  return (
    <section id ='#About '>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img  src={ME} alt="About image" />
          </div>
          
        </div>
        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years of working Experience</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Projects</h5>
            <small>30+ completed Projects </small>
          </article>
          <article className='about__card'>
            <AiFillFolderOpen className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years of working Experience</small>
          </article>
          
          
        </div>

        <div className='border'>
        <p>

          <h2 className='skills'>My Skills</h2>

Alex Njoya is a talented MERN (MongoDB, Express.js, React.js, Node.js) developer with two years of valuable experience in web development. Currently, Alex is also a dedicated student at the University of Ghana, Legon, pursuing further knowledge and skills in the field of computer science.

With a passion for creating efficient and user-friendly web applications, Alex has gained significant expertise in developing robust and scalable solutions using the MERN stack. Throughout his career, he has successfully contributed to the creation of various web projects, showcasing his proficiency in front-end development with React.js, back-end development with Node.js and Express.js, and database management using MongoDB.

I am dedicated to continuous learning and his strong problem-solving abilities make him a valuable asset to any development team. His commitment to staying updated with the latest trends and technologies in the industry enables him to deliver high-quality code and maintain best practices.

Outside of his professional endeavors, I enjoys participating in coding communities and attending tech conferences, where he can network with like-minded individuals and expand his knowledge. His combination of practical experience and academic pursuit makes him a well-rounded MERN developer with a bright future ahead.

          </p>
          <a href="#contact"className='btn btn-primary ' >Let's talk </a>
          </div>
      </div>
      </div>
      
    </section>
  )
}

export default About
import React from 'react'
import './Portfolio.css'
import IMG1 from '../../asset/portfolio1.jpg'
import IMG2 from '../../asset/portfolio2.jpg'
import IMG3 from '../../asset/portfolio3.jpg'
import IMG4 from '../../asset/portfolio4.jpg'
import IMG5 from '../../asset/portfolio5.png'
import IMG6 from '../../asset/portfolio6.jpg'



const Portfolio = () => {
  return (
    <section id='Portfolio'>
      
      <h2>My Recent Works </h2>
    
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item__image">

            <img src={IMG1} alt="" />
            <h3>portfolio 1</h3>

            <div className="portfolio__item-cta">
              
            <a href="https://github.com " className='btn'>GitHub</a>
            <a href="https://https://dribbble.com/  " className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </div>
        </article> 
        <article className='portfolio__item'>
          <div className="portfolio__item__image">
            <img src={IMG2} alt="" />
            <h3>portfolio 2</h3>
            <div className="portfolio__item-cta">
             
            <a href="https://github.com " className='btn'>GitHub</a>
            <a href="https://https://dribbble.com/  " className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__image">
            <img src={IMG3} alt="" />
            <h3>this  is a portfolio </h3>

            <div className="portfolio__item-cta">
            <a href="https://github.com " className='btn'>GitHub</a>
            <a href="https://https://dribbble.com/  " className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__image">

            <img src={IMG4} alt="" />
            <h3>this  is a portfolio </h3>


            <div className="portfolio__item-cta">
             
            <a href="https://github.com " className='btn'>GitHub</a>
            <a href="https://https://dribbble.com/  " className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__image">
            <img src={IMG5} alt="" />
            <h3>this  is a portfolio </h3>

            <div className="portfolio__item-cta">
            <a href="https://github.com " className='btn'>GitHub</a>
            <a href="https://https://dribbble.com/  " className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item__image">
            <img src={IMG6} alt="" />
            <h3>this  is a portfolio </h3>
           
            <div className="portfolio__item-cta">

            
            <a href="https://github.com " className='btn'>GitHub</a>
            <a href="https://https://dribbble.com/  " className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
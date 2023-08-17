import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='Experience'>
      <h2>
         what skills I have    
      </h2>
      
      <div className="experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__icons'/>
              <div/>
              <div><h4>HTML</h4>
              <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
               <div><h4>CSS</h4>
              <small className='Intermediate'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
 
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
              <div>
              <h4>Boostrap</h4>
              <small className='text-light'>Experienced </small>
 
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
             <div>
             <h4>Tailwind</h4>
              <small className='text-light'>Experience</small>
             </div>
            </article>


          </div>
        </div>
        <div className="experience__frontend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
              <div>
              <h4>Node.js</h4>
              <small className='text-light'> Experienced</small>
              </div>
 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
              <div>
              <h4>MongoDB</h4>
              <small className='Intermediate'>Intermediate</small>
              </div>
 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
              <div>
              <h4>Express.js</h4>
              <small className='text-light'>Experienced</small>
              </div>
 
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__icons'/>
              <div>
              <h4>php</h4>
              <small className='text-light'>Experienced </small>
 
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
             <div>  
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
 
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__icons'/>
              <div>
              <h4>python</h4>
              <small className='text-light'>Experience</small>
 
              </div>
            </article>


          </div>
        </div>
      </div>
    </section>

    )
}

export default Experience
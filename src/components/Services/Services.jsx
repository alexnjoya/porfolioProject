import React from 'react'
import './Services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='Services'>
      
      <h2>What I offer</h2>
      <div className="container  services__container">
      <article className='services'>
      <div className="services__head">
        <h3> Graphic Designing  </h3>
        </div>
          <ul className='services__list'>
          <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Product Designs. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                mock-up. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                advertisement flyers. 
              </p>
            </li>
            
        
          </ul> 
          </article> 

          {/*end of ui/ux section*/}

          <article className='services'>
      <div className="services__head">
        <h3> Web Development  </h3>
        </div>
          <ul className='services__list'>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
          </ul> 
          </article> 
          {/*end of  web development  section*/}

          <article className='services'>
      <div className="services__head">
        <h3> Content Creation  </h3>
        </div>
          <ul className='services__list'>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='servicess__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
            <li>
              <BsCheck className='services__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet. 
              </p>
            </li>
          </ul> 
          </article> 
          {/*end of   content creation section*/}

        </div>
    </section>
  )
}

export default Services
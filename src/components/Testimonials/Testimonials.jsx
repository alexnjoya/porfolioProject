import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../asset/avatar1.jpg'
import AVTR2 from '../../asset/avatar2.jpg'
import AVTR3  from '../../asset/avatar3.jpg'
import AVTR4 from '../../asset/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
//import {  Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';

const data = [

  {
    avatar : AVTR1,
    name: "Americana",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, reprehenderit quas? Provident tempore, ullam corrupti aut ea veniam vero quasi voluptatum et eos minus. Doloribus odit quo voluptate ipsam repellendus?'
  },
  {
    avatar : AVTR2,
    name: "Americana",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, reprehenderit quas? Provident tempore, ullam corrupti aut ea veniam vero quasi voluptatum et eos minus. Doloribus odit quo voluptate ipsam repellendus?'
  },
  {
    avatar : AVTR3,
    name: "Americana",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, reprehenderit quas? Provident tempore, ullam corrupti aut ea veniam vero quasi voluptatum et eos minus. Doloribus odit quo voluptate ipsam repellendus?'
  },
  {
    avatar : AVTR4,
    name: "Americana",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, reprehenderit quas? Provident tempore, ullam corrupti aut ea veniam vero quasi voluptatum et eos minus. Doloribus odit quo voluptate ipsam repellendus?'
  },

]

const Testimonials = () => {
  return (<section id='Testimonials'>
    <h2>Reviews from Clients</h2>
    
    <Swiper className= "testimonial__container" modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
  
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt="some images here " />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
      }
    
    </Swiper>
  </section>  
  )
}

export default Testimonials
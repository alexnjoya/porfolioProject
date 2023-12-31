import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../asset/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello  I'm </h5>
            <h1>Alex Njoya</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA/>
            <HeaderSocial/>
            <div className="me">
            <img src={Me} alt=' this is just an image text ' />
            </div>
            <a href="#contact" className='scroll__Down'>Scroll Down</a>
            </div>    
    </header>
  )
};
export default Header
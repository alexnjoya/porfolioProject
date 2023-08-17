import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitterSquare} from 'react-icons/fa'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Xela</a>
      <ul className='permalinks'>
        <li><a href="#"> Home</a></li>
        <li><a href="#about"> about</a></li>
        <li><a href="#Experience"> Expereince</a></li>
        <li><a href="#Servies"> Services</a></li>
        <li><a href="#portfolio"> Porfolio</a></li>
        <li><a href="#Contact"> Contact </a></li>
        <li><a href="#Testimonails"> Testimonials </a></li>
        
        </ul> 
        <div className="footer__socials">
          <a href="https://facebook.com"> <BsFacebook></BsFacebook></a>
          <a href="https://facebook.com"><FiInstagram/> </a>
          <a href="https://facebook.com"> <FaTwitterSquare/></a>
          
        </div>
      
 
      <div className="footer__copyright">
        <small>&copy; Alex Njoya: All right reseerved </small>
      </div>
    </footer>
  )
}

export default Footer
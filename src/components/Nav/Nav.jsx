import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {useState} from 'react' 

const Nav = () => {
  const [activeNav, setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#"onClick={ ()=> setactiveNav('#')} className={activeNav === '# ' ? 'active': ''} ><AiOutlineHome/> </a>
      <a href="#About" onClick={ ()=> setactiveNav('#about')} className={activeNav === '# about' ? 'active': ''} ><AiOutlineUser/> </a>
      <a href="#Experience" onClick={ ()=> setactiveNav('#Experience')} className={activeNav === '# Experience' ? 'active': ''} ><BiBook/> </a>
      <a href="#Services" onClick={ ()=> setactiveNav('#Services')} className={activeNav === '# Services' ? 'active': ''} ><RiServiceLine/> </a>
      <a href="#Contact" onClick={ ()=> setactiveNav('#Contact')} className={activeNav === '# Contact' ? 'active': ''} ><BiMessageRoundedDetail/> </a>
        
    </nav>
  )
}

export default Nav
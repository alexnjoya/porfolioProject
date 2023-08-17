import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {LuDribbble} from 'react-icons/lu'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target='blank'><BsLinkedin/></a>
        <a href="https://linkedin.com" target='blank'><FaGithub/></a>
        <a href="https://dribble.com" target='blank' ><LuDribbble/></a>

    </div>
  )
}

export default HeaderSocial
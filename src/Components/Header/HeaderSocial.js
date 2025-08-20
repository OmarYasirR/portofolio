import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="https://www.linkedin.com/in/omar-yasir-dfaalla-488a95222/" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/OmarYasirR" target='_blank'><FaGithub /></a>
      <a href="https://dirbbble.com" target='_blank'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocial
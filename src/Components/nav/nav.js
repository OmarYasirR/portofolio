import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import './nav.css'

function Nav() {
  const [activeClass, setActiveClass] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveClass('#')} className={activeClass == '#'?'active': ''}><AiOutlineHome /></a>
      <a href="#portfolio" onClick={() => setActiveClass('#portfolio')} className={activeClass == '#portfolio'?'active': ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveClass('#experience')} className={activeClass == '#experience'?'active': ''}><BiBook /></a>
      <a href="#services" onClick={() => setActiveClass('#services')} className={activeClass == '#services'?'active': ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveClass('#contact')} className={activeClass == '#contact'?'active': ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
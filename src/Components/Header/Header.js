import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/img1.jpg'
import HeaderSocial from './HeaderSocial'


function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Omer Yasir</h1>
        <h5 className='text-light'>Forntend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
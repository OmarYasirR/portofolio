import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Desgin</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list_icon"/>
              <p>Designs user-friendly and visually appealing web interfaces.</p>
            </li>
            <li>
              <BiCheck className="service__list_icon"/>
              <p>Converts UI designs into functional web pages.</p>
            </li>
            <li>
              <BiCheck className="service__list_icon"/>
              <p>Codes using HTML, CSS, and JavaScript efficiently.</p>
            </li>
            <li>
              <BiCheck className="service__list_icon"/>
              <p>Ensures cross-browser and device compatibility.</p>
            </li>
            <li>
              <BiCheck className="service__list_icon"/>
              <p>Collaborates to enhance overall user experience.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Mobail Apps Developer </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list_icon"/>
              <p>Designs intuitive user interfaces for mobile applications.</p>
            </li>
            <li>
              <BiCheck className="service__list_icon"/>
              <p>Creates visual elements that enhance user experience.</p>
            </li>
            <li>
              <BiCheck className="service__list_icon"/>
              <p>Understands user behavior to guide design decisions.</p>
            </li>
            <li>
              <BiCheck className="service__list_icon"/>
              <p>Collaborates with developers to implement design features</p>
            </li>
            <li>
              <BiCheck className="service__list_icon"/>
              <p>Tests and refines designs based on user feedback.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services
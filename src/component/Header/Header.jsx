import React from 'react'
import './header.css'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs' 
import { BsGithub } from 'react-icons/bs' 
import CTA from '../CTA/CTA'
import  homecactus from '../img/home-cactus.png'

const Header = () => {
  return (
    <header id='Home'>
      <section className="header">
        <div className="header__conteiner">
          <h3>Hello, I'm</h3>
          <h1>Mister Cactus</h1>
          <p>A Frontend Developer <span>From Garden</span></p>
          <div className="header__socials">
            <a href="www.instagram.com" type='_blank'><BsInstagram /></a>
            <a href="www.facebook.com"><BsFacebook /></a>
            <a href="ru.linkedin.com/"><BsLinkedin /></a>
            <a href="github.com/"><BsGithub /></a>
          </div>
          <div className='button'>
            <CTA text='About Us' />
          </div>
        </div>
        <div className="img">
          <img src={homecactus} alt="cactus" />
        </div>
      </section>
    </header>
  )
}

export default Header
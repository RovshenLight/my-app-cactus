import React, { useState, useEffect } from 'react'
import './navbar.css'
import LOGO from '../img/Logocactus.png'
import CTA from '../CTA/CTA'
import { IoClose, IoMenu } from "react-icons/io5";

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass('sticky') : setStickyClass('');
    }
  };

  return (
    <div className={`navbar ${stickyClass}`}>
      <nav>
        <a href="#Home" className="logo">
          <img src={LOGO} alt="logo" />
        </a>
        <div className="navbar__links">
          <ul>
            <li><a href="#Home" className='link'>Home</a></li>
            <li><a href="#About" className='link'>About</a></li>
            <li><a href="#Works" className='link'>Works</a></li>
            <li><a href="#Service" className='link'>Service</a></li>
            <li><a href="#Contact" className='link'>Contact</a></li>
          </ul>
        </div>
          <div className='button'>
            <CTA className='btn ' text='Download CV' />
          </div>
      </nav>
          <div className="toggle__menu">
            { toggleMenu ? <IoClose color='green' size={27} onClick={() => setToggleMenu(false)} /> 
            : <IoMenu color='green' size={27} onClick={() => setToggleMenu(true)} /> }
            {toggleMenu && (
              <div className='navbar__mobile-conteiner scale-up-tr'>
              <div className='navbar__mobile__links'>
                <ul>
                  <li><a href="#Home" className='mobile__link'>Home</a></li>
                  <li><a href="#About" className='mobile__link'>About</a></li>
                  <li><a href="#Works" className='mobile__link'>Works</a></li>
                  <li><a href="#Service" className='mobile__link'>Service</a></li>
                  <li><a href="#Contact" className='mobile__link'>Contact</a></li>
                </ul>
                
                <div className='mobile__button'>
                  <CTA className='mobile__btn' text='Download CV' />
                </div>

                </div>
            </div>
            )}
          </div>
    </div>
  )
 
}

export default NavBar
import React from 'react'
import './footer.css'
import CTA from '../CTA/CTA.jsx'

const Footer = () => {
  return (
    <footer id='Contact'>
      <article className='footer'>
        <div className="footer__send">
          <h1>Let's Talk About Web Sites!</h1>
          <h3>Do not like form? Send Me an email.</h3>
          <form>
            <input type="text" />
            <CTA text='Send' /> 
          </form>
        </div>
        <p>Made with LOVE By RovshenLight 2024</p>
      </article>
    </footer>
  )
}

export default Footer
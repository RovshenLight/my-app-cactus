import React from 'react'
import './aboutme.css'
import CTA from '../CTA/CTA.jsx'
import cactusaboutme from '../img/aboutme-cactus.png'

const AboutMe = () => {
  return (
    <section className='aboutme__section' id='About'>
       <article className="aboutme">
        <div className="aboutme__img">
          <img src={cactusaboutme} alt="cactus" />
        </div>
        <div className="aboutme__conteiner">
          <h3>I'm Frontend</h3>
          <h1>I can make any web site what you want</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia natus vel, vitae vero, laudantium quae eaque ducimus earum, assumenda ab veniam nemo enim asperiores reiciendis eius quisquam ipsam rem suscipit blanditiis nobis neque! Enim possimus architecto alias quam deleniti sed accusantium quidem tempore. Ullam blanditiis consectetur aliquam itaque minima.</p>
          <div className='button'>
            <CTA text='Hire Me' />
          </div>
        </div>
      </article>
    </section>
  )
}

export default AboutMe
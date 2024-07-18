import React from 'react'
import './cta.css'

const CTA = ({ text }) => {
  return (
    <div>
      <button className='cta'>{ text }</button>
    </div>
  )
}

export default CTA
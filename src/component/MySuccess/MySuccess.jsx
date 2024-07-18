import React from 'react'
import './mysuccess.css'

const MySuccess = () => {

  const mysuccessfully = [
    {
      count: '1200+',
      text: 'Finishid Projects',
    },
    {
      count: '360+',
      text: 'Happy Customer',
    },
    {
      count: '14k',
      text: 'Global Customer',
    }
  ]

  return (
    <section className='mysuccess__section'>
        <h1 className='mysuccess__title'>
          Completed 1200+ Projects Successfully
        </h1>
      <article className='mysuccess'>
        {mysuccessfully.map((success, index) => (
          <div className='mysuccess__container' key={success.text + index}>
            <h2>{success.count}</h2>
            <h2>{success.text}</h2>
          </div>
        ))}
      </article>
    </section>
  )
}

export default MySuccess
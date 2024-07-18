import React from 'react'
import './featers.css'
import firstcactus from '../img/new-cactus-1.png'
import secondtcactus from '../img/new-cactus-2.png'
import thirdcactus from '../img/new-cactus-3.png'

const Featers = () => {

  const featers = [
    {
      img: firstcactus,
      title: 'Pixel Perfect',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, in autem veritatis nostrum ipsum alias laborum quisquam! Non, sequi eius!',
      id: 1
    },
    {
      img: secondtcactus,
      title: 'High Quality',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, in autem veritatis nostrum ipsum alias laborum quisquam! Non, sequi eius!',
      id: 2
    },
    {
      img: thirdcactus,
      title: 'Awesome Idea',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, in autem veritatis nostrum ipsum alias laborum quisquam! Non, sequi eius!',
      id: 3
    }
  ]

  return (
      <section className='featers__content'>
        <article className='featers'>
          {featers.map((feater) => (
            <div className="featers__container" key={feater.id}>
              <div className="featers__column">
                <img src={feater.img} alt="cactus" />
                <h3>{feater.title}</h3>
                <p>{feater.text}</p>
              </div>
            </div>
          ))}
        </article>
      </section>
  )
}

export default Featers
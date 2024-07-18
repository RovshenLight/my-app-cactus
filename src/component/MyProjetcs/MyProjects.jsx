import React from 'react'
import './myprojects.css'
import cactusft from '../img/shopcactus1.png'
import cactussd from '../img/shopcactus2.png'
import cactustd from '../img/shopcactus3.png'
import cactusfth from '../img/shopcactus4.png'
import cactusfivth from '../img/shopcactus5.png'
import cactussix from '../img/shopcactus6.png'

const MyProjects = () => {

  const shopCactus = [
    {
      img: cactusft,
      title: 'My Cactus',
      subtitle: 'My Job',
      id: 1
    },
    {
      img: cactussd,
      title: 'My Cactus',
      subtitle: 'My Job',
      id: 2
    },
    {
      img: cactustd,
      title: 'My Cactus',
      subtitle: 'My Job',
      id: 3
    },
    {
      img: cactusfth,
      title: 'My Cactus',
      subtitle: 'My Job',
      id: 4
    },
    {
      img: cactusfivth,
      title: 'My Cactus',
      subtitle: 'My Job',
      id: 5
    },
    {
      img: cactussix,
      title: 'My Cactus',
      subtitle: 'My Job',
      id: 6
    }
  ];

  return (
    <section className='myproject__section' id='Works'>
        <h3>Portfolie</h3>
        <h1>My Amazing Works</h1>
      <article className='myproject'>
        { shopCactus.map((cactus) => (
          <div className="myproject__container" key={cactus.id}>
            <img src={cactus.img} alt="cactus" />
            <div className='myproject__texts'>
              <h2>{cactus.title}</h2>
              <h4>{cactus.subtitle}</h4>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default MyProjects
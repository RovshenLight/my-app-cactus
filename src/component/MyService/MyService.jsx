import React from 'react'
import './myservice.css'
import iconforservice from '../img/favicon.png'

const MyService = () => {

  const myservices = [
    {
      img: iconforservice,
      title: 'Web Site',
      subtitle: 'Start From $99',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore iure sit voluptate ex eaque repudiandae, cum molestias dignissimos at illo rem sed ipsam quos et repellat alias ratione atque. Quia, veritatis numquam neque quam dolores porro minima voluptatem vero beatae rem, dolorum quas aliquid. Dolores adipisci suscipit nisi exercitationem maiores!',
      id: 1
    },
    {
      img: iconforservice,
      title: 'Web Site',
      subtitle: 'Start From $99',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore iure sit voluptate ex eaque repudiandae, cum molestias dignissimos at illo rem sed ipsam quos et repellat alias ratione atque. Quia, veritatis numquam neque quam dolores porro minima voluptatem vero beatae rem, dolorum quas aliquid. Dolores adipisci suscipit nisi exercitationem maiores!',
      id: 2
    },
    {
      img: iconforservice,
      title: 'Web Site',
      subtitle: 'Start From $99',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore iure sit voluptate ex eaque repudiandae, cum molestias dignissimos at illo rem sed ipsam quos et repellat alias ratione atque. Quia, veritatis numquam neque quam dolores porro minima voluptatem vero beatae rem, dolorum quas aliquid. Dolores adipisci suscipit nisi exercitationem maiores!',
      id: 3
    },
    {
      img: iconforservice,
      title: 'Web Site',
      subtitle: 'Start From $99',
      text: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore iure sit voluptate ex eaque repudiandae, cum molestias dignissimos at illo rem sed ipsam quos et repellat alias ratione atque. Quia, veritatis numquam neque quam dolores porro minima voluptatem vero beatae rem, dolorum quas aliquid. Dolores adipisci suscipit nisi exercitationem maiores!',
      id: 4
    }
  ]

  return (
    <section id='Service'>
        <div className='myservice__title'>
          <h3>Service</h3>
          <h1>What I Do For Client</h1>
        </div>
      <article className='myservice'>
        {myservices.map((serviec) => (
          <div className='myservice__container' key={serviec.id}>
            <div className="myservice__price">
              <img src={iconforservice} alt="cactus" />
              <h2>{serviec.title}</h2>
              <h2>{serviec.subtitle}</h2>
            </div>
            <p>{serviec.text}</p>
          </div>
        ))}
      </article>
    </section>
  )
}

export default MyService
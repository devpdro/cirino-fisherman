import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import styles from './portions.module.scss'

const foodItems = [
  {
    name: 'Hambúrguer',
    image: 'burger.jpg',
  },
  {
    name: 'Pizza',
    image: 'pizza.jpg',
  },
  {
    name: 'Sushi',
    image: 'sushi.jpg',
  },
]

export function Portions() {
  return (
    <section className={styles.container}>
      <div className={styles.container_cortions}>
        <span className={styles.subtitle}>Variedade de comidas</span>
        <h1 className={styles.title}>Porções</h1>
        <div className={styles.food_carousel}>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            {foodItems.map((item, index) => (
              <div key={index} className={styles.food_item}>
                <img src={`/images/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

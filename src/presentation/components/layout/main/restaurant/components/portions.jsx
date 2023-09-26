import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/splide/dist/css/splide.min.css'
import Food from '../../../../assets/foods/porcao.jpg'
import styles from './portions.module.scss'
export function Portions() {
  const slideData = [
    { image: Food, description: 'Batata frita' },
    { image: Food, description: 'Polenta' },
    { image: Food, description: 'Frango' },
  ]

  return (
    <section className={styles.container}>
      <span className={styles.subtitle}>Variedade de comidas</span>
      <h1 className={styles.title}>Porções</h1>
      <div className={styles.carousel_container}>
        <Splide
          options={{
            type: 'loop',
            perPage: 4,
            perMove: 1,
            gap: '1rem',
          }}
        >
          {slideData.map((slide, index) => (
            <SplideSlide key={index}>
              <img src={slide.image} alt={`Imagem ${index + 1}`} />
              <div className={styles.description}>{slide.description}</div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

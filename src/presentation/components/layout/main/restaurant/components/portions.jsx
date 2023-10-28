import { useEffect } from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@splidejs/splide/dist/css/splide.min.css'
import images_foods from 'presentation/components/assets/foods/images_foods'

import styles from './portions.module.scss'
export function Portions() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section className={styles.container}>
      <span
        data-aos="fade-down"
        data-aos-easing="ease"
        data-aos-duration="1500"
        className={styles.subtitle}
      >
        Variedade de comidas
      </span>
      <h1
        data-aos="fade-down"
        data-aos-easing="ease"
        data-aos-duration="1500"
        className={styles.title}
      >
        Porções
      </h1>
      <div className={styles.carousel_container}>
        <Splide
          className={styles.carousel}
          options={{
            type: 'slide',
            perPage:
              window.innerWidth < 768
                ? 1
                : window.innerWidth < 1024
                ? 2
                : window.innerWidth < 1280
                ? 3
                : 4,
            perMove: 1,
            gap: '1rem',
            arrows: true,
            showIndicators: false,
          }}
        >
          {images_foods.map((slide, index) => (
            <SplideSlide
              data-aos="fade-left"
              data-aos-easing="ease"
              data-aos-duration="1500"
              className={styles.box_carousel}
              key={index}
            >
              <img src={slide.src} alt={slide.alt} />
              <div className={styles.description}>{slide.description}</div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

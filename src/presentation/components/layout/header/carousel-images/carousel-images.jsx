import { Carousel } from 'react-responsive-carousel'

import { images_fishing } from 'presentation/components/assets/fishing-boat/images-fishing'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import styles from './carousel-images.module.scss'
import { AttractiveBox } from './components/attractive-box'
export function CarouselImages() {
  return (
    <div className={styles.carousel_container}>
      <Carousel
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={false}
        showIndicators={false}
        className={styles.carousel}
      >
        {images_fishing.slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageContainer}>
              <div className={styles.overlay}></div>
              <img src={slide.src} alt={slide.alt} />
              <div className={styles.imageText}>
                <h1>
                  Venha conheçer nosso <span>Pesqueiro</span>
                </h1>
                <p className={styles.subtitle}>Diversão para toda família</p>
                <AttractiveBox />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

import Img2 from 'presentation/components/assets/fishing-boat/img/fim_do_dia_passaros.JPG'
import Img1 from 'presentation/components/assets/foods/porcao.jpg'

import styles from './gallery-images.module.scss'

const images = [
  Img1,
  Img2,
  Img1,
  Img2,
  Img1,
  Img2,
  Img1,
  Img2,
  Img1,
  Img2,
  Img1,
  Img2,
]

export function GalleryImages() {
  return (
    <section className={styles.container}>
      <div className={styles.images_container}>
        {images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Image ${index}`} />
        ))}
      </div>
    </section>
  )
}

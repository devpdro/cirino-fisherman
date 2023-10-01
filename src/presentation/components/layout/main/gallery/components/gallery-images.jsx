import images_gallery from 'presentation/components/assets/gallery/images-gallery'
import images_restaurant from 'presentation/components/assets/restaurant/images_restaurant'

import styles from './gallery-images.module.scss'

export function GalleryImages() {
  return (
    <section id="fotos" className={styles.container}>
      <span className={styles.subtitle}>Belas fisgadas</span>
      <h1 className={styles.title}>Galeria</h1>
      <h2>
        <span className={styles.fishing}>Pesqueiro</span>
      </h2>
      <div className={styles.images_container}>
        {images_gallery.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <h2>
        <span className={styles.fishing}>Local para eventos</span>
      </h2>
      <div className={styles.images_container}>
        {images_restaurant.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  )
}

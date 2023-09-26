import images_gallery from 'presentation/components/assets/gallery/images-gallery'

import styles from './gallery-images.module.scss'

export function GalleryImages() {
  return (
    <section className={styles.container}>
      <span className={styles.subtitle}>Belas fisgadas</span>
      <h1 className={styles.title}>Galeria</h1>
      <div className={styles.images_container}>
        {images_gallery.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  )
}

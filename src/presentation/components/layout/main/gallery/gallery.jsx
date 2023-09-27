import { GalleryImages } from './components/gallery-images'
import { GalleryThumb } from './components/gallery-thumb'

export function Gallery() {
  return (
    <section>
      <GalleryThumb
        title="Galeria de fotos"
        subtitle="Explorando a beleza das pescarias."
      />
      <GalleryImages />
    </section>
  )
}

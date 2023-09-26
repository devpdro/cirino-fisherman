import { LocationThumb } from './components/location-thumb'
import { Map } from './components/map'
import styles from './location.module.scss'
export function Location() {
  return (
    <section className={styles.container}>
      <LocationThumb title="Localização" subtitle="localizar" />
      <Map />
    </section>
  )
}

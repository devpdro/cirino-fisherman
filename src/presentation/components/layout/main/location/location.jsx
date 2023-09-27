import { LocationThumb } from './components/location-thumb'
import { Map } from './components/map'
import styles from './location.module.scss'
export function Location() {
  return (
    <section className={styles.container}>
      <LocationThumb title="Localização" subtitle="Venha nos visitar!" />
      <div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          maiores dolorem temporibus soluta minus dicta consectetur eum
          aspernatur in. Dignissimos non illo maiores itaque repellat numquam
          odit quibusdam illum reprehenderit!k
        </div>
        <div>
          <Map />
        </div>
      </div>
    </section>
  )
}

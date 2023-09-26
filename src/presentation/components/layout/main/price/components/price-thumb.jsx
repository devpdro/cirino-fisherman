import PropTypes from 'prop-types'

import styles from './price-thumb.module.scss'
export function PriceThumb(props) {
  return (
    <section className={styles.thumb_container}>
      <div className={styles.image_container}>
        <div className={styles.overlay}></div>
        <div className={styles.image_text}>
          <h1>{props.title && <span>{props.title}</span>}</h1>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </section>
  )
}

PriceThumb.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

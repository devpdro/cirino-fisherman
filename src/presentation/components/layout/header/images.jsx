import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../../../main/data/db";  

import styles from "./images.module.scss";

export function Images() {
  return (
    <div className={styles.carousel_container}>
      <Carousel
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.carousel}
      >
        {data.slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageContainer}>
              <img src={slide.src} alt={slide.alt} />
              <div className={styles.imageText}>PESQUEIRO DIVERSÃO PARA TODA FAMÍLIA</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

import React from "react";
import styles from "./slide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

interface SlideProps {
  slides: { id: string; src: string; alt: string }[];
  currentIndex: number;
}

const Slide: React.FC<SlideProps> = ({ slides, currentIndex }) => {
  return (
    <section className={styles.container}>
      <div className={styles.sliderWrapper}>
        <div className={styles.blackBox}>
          <div className={styles.textWrapper}>
            <h4 className={styles.infoText}>Aušros Vartų g. 7, Vilnius</h4>
            <h4 className={styles.infoText}>Tel. +370 60 809 445</h4>
            <h5 className={styles.infoText}>
              Darbo laikas / Open: <br />
              VII - IV 17:00 - 02:00 <br />
              V-VI 17:00 - 04:00
            </h5>
            <a
              id="mapLink"
              className={`${styles.infoText} ${styles.mapLink}`}
              href="https://maps.app.goo.gl/GHwgyTrYGSzV3oqZ8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <FontAwesomeIcon style={{color:'red', paddingRight:'10px'}} icon={faMapMarkerAlt} />
                Mus rasite čia / Our Location
              </p>
            </a>
          </div>
        </div>
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slide;

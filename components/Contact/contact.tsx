import styles from './contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// Define the shape of props
interface ContactProps {
  address: string;
  phone: string;
  workingHours: {
    weekdays: string;
    weekend: string;
  };
  facebookLink: string;
  instagramLink: string;
}

const Contact: React.FC<ContactProps> = ({ address, phone, workingHours, facebookLink, instagramLink }) => {
  return (
    <div className={styles.contactWrapper}>
      <img src="/food3.jpg" alt="food" className={styles.photoBackground} />
      <div className={styles.blackBox1}>
        <div className={styles.textWrapper}>
          <h4 className={styles.infoText}>{address}</h4>
          <h4 className={styles.infoText}>Tel. {phone}</h4>
          <h5 className={styles.infoText}>
            Darbo laikas / Open: <br />
            VII - IV {workingHours.weekdays} <br />
            V-VI {workingHours.weekend}
          </h5>
          <a
            id="mapLink"
            className={`${styles.infoText} ${styles.mapLink}`}
            href="https://maps.app.goo.gl/GHwgyTrYGSzV3oqZ8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <FontAwesomeIcon style={{ color: 'red', paddingRight: '10px' }} icon={faMapMarkerAlt} />
              Mus rasite čia / <br></br> Our Location
            </p>
          </a>
          <div className={styles.socialWrappers}>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <img src="/facebook_icon.svg" alt="facebook icon" className={styles.socialIcon} />
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="instagram icon" className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

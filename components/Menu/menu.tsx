import styles from "./menu.module.css";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.menuWrapper}>
      <Image
        src="/INVINOmenu.jpg"
        alt=" invino menu"
        layout="responsive" 
  width={800} 
  height={600}
        className={styles.menuImage}
      />
    </div>
  );
};

export default Menu;

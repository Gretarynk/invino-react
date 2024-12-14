import React, { useState } from "react";
import Link from "next/link";
import styles from "../Header/header.module.css";
import Navigation from "../NavBar/navigation";
import links from "@/constans/links";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  console.log("Menu toggled:", !isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <img src="/invinoreds.png" alt="" className={styles.invino} />
        </Link>
      </div>
      <Navigation links={links} />
      <div className={styles.socialWrapper}>
        <Link href="http://www.facebook.com/INVINObaras" target="blank">
          <img
            src="/facebook_icon.svg"
            alt="facebook icon"
            className={styles.socialIcon}
          />
        </Link>
        <Link
          href="https://www.instagram.com/invinobaras?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="blank"
        >
          <img
            src="/instagram.svg"
            alt="instagram icon"
            className={styles.socialIcon}
          />
        </Link>
      </div>
      {!isMenuOpen ? (
        <button className={styles.burgerMenu} onClick={toggleMenu}>
          <img
            className={styles.burger}
            src="/menuBurger.svg"
            alt="Open Menu"
          />
        </button>
      ) : (
        <button className={styles.closeMenu} onClick={toggleMenu}>
          <p>X</p>
        </button>
      )}
      <nav
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        {isMenuOpen && (
          <ul className={styles.mobileLinks}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        )}
        <div className={styles.socialMobile}>
          <Link href="http://www.facebook.com/INVINObaras" target="blank">
            <img
              src="/facebook_icon.svg"
              alt="facebook icon"
              className={styles.socialIcon}
            />
          </Link>
          <Link
            href="https://www.instagram.com/invinobaras?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="blank"
          >
            <img
              src="/instagram.svg"
              alt="instagram icon"
              className={styles.socialIcon}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

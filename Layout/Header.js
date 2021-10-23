import Image from "next/image";
import React from "react";
import focus from "../assets/icons/center-focus.svg";
import search from "../assets/icons/search.svg";
import logo from "../assets/logo/logo.png";
import styles from "../styles/Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.logoContainer}`}>
        <Image src={logo} />
      </div>
      <div className={`${styles.search}`}>
        <div className={`${styles.inputContainer}`}>
          <input type="text" name="search" id="search" />
        </div>
        <div className={`${styles.searchImage}`}>
          <Image src={search} />
        </div>
        <div className={`${styles.focusImage}`}>
          <Image src={focus} />
        </div>
      </div>
    </div>
  );
};

export default Header;

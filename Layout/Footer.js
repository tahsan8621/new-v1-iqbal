import Image from "next/image";
import React from "react";
import profile from "../assets/icons/account.svg";
import home from "../assets/icons/home.svg";
import menu from "../assets/icons/menu.svg";
import cart from "../assets/icons/shipping_cart.svg";
import styles from "../styles/Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.menuWrapper}>
      <div className={`flex ${styles.menuContainer}`}>
        <div>
          <Image src={home} />
          <p>Home</p>
        </div>
        <div>
          <Image src={menu} />
          <p>Menu</p>
        </div>
        <div>
          <Image src={cart} />
          <p>Menu</p>
        </div>
        <div>
          <Image src={home} />
          <p>Cart</p>
        </div>
        <div>
          <Image src={profile} />
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

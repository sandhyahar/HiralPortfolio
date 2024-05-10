import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mayuri</h1>
        <p className={styles.description}>
          I'm a UI/UX Designer  with 1 years of experience.
        </p>
        <a href="https://drive.google.com/file/d/1HYlPw57XSYvOpc547FqBNRGhwokAYMmZ/view?usp=sharing" className={styles.contactBtn}>
          Reasume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

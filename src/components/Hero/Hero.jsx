import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hiral</h1>
        <p className={styles.description}>
          I'm a Passionate UI/UX designer with 1 years of experience translating complex ideas into intuitive, user-friendly interfaces. Proficient in creating mockups to effectively communicate design concepts. Strong understanding of design principles, typography, color theory, and usability standards. 
        </p>
        <a href="https://drive.google.com/file/d/1B2eJuV2mc7rTlZbXYgOAYhc2ZmsnZhdt/view?usp=drivesdk" className={styles.contactBtn}>
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

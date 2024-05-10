import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX designer</h3>
              <p>
              Hello there! I'm mayuri, a dedicated UI/UX designer with a passion for crafting efficient and scalable solutions. With 1 years of experience in the industry, I've had the opportunity to delve deep into the world of UI/UX Designer, mastering its intricacies and leveraging its power to build robust applications.My journey in UI/UX Designer began April 2023. Since then, I've been captivated by the endless possibilities that designerg offers, constantly seeking new challenges to expand my skills and knowledge base.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skill</h3>
              <p>
              Skilled in UI/UX designer like illustrator, Photoshop,  Adobe XD, FIGMA and Canva I can create dynamic web applications with seamless user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

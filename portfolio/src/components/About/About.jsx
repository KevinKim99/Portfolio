import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/myPic.JPG")} alt="Me" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I aspire to become a front-end developer with a strong focus on designin and developing highly responsive web applications, ensuring seamless user experiences across various devices and platforms.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>I have designed multiple landing pages and contributed to the creation of key system interfaces, ensuring intuitive design and optimal user interaction</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
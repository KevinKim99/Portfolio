import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Kevin.module.css"

export const Kevin = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kevin</h1>
        <p className={styles.description}>I am 4th year UBC student majoring Computer Science, interested in pursuing a career as a software engieer with a focus on full-stack or front-end developer. My goal is to make a meaningful impact in the software field!</p>
        <a href="mailto:kanghyun.kevin.kim99@gmail.com" className={styles.contactBtn}>Contact Me!</a>
      </div>
      <img src={getImageUrl("hero/me.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
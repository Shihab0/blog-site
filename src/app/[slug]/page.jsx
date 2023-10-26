import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";

const singlePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          </div>
          <div className={styles.userTextContainer}>
            <span className={styles.username}>reporter</span>
            <span className={styles.date}>09.02.2023</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default singlePage;

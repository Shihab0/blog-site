import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import { ST } from "next/dist/shared/lib/utils";

const singlePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>reporter</span>
              <span className={styles.date}>09.02.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus ipsum, eius quam vitae aperiam ratione.
            </p>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              neque facilis, ipsam nihil voluptates rerum expedita tempore porro
              aspernatur recusandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              neque facilis, ipsam nihil voluptates rerum expedita tempore porro
              aspernatur recusandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              neque facilis, ipsam nihil voluptates rerum expedita tempore porro
              aspernatur recusandae?
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default singlePage;

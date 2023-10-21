import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill></Image>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.details}>
            <span className={styles.date}> 09/09/3043</span>
            <span className={styles.category}>Culture</span>
          </div>
          <Link href="">
            <h1 className={styles.title}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
            </h1>
          </Link>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur ipsum architecto repellendus ad nihil? Aliquid. Lorem
            ipsum dolor sit amet.{" "}
          </p>
          <Link href="">Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

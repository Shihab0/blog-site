import React from "react";
import styles from "./categoryListl.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            width={20}
            height={20}
            alt=""
            className={styles.image}
          />{" "}
          Style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            width={20}
            height={20}
            alt=""
            className={styles.image}
          />{" "}
          Fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            width={20}
            height={20}
            alt=""
            className={styles.image}
          />{" "}
          food
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/food.png"
            width={20}
            height={20}
            alt=""
            className={styles.image}
          />{" "}
          travel
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.png"
            width={20}
            height={20}
            alt=""
            className={styles.image}
          />{" "}
          culture
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            width={20}
            height={20}
            alt=""
            className={styles.image}
          />{" "}
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;

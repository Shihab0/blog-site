import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.category} ${styles.style}`}
      >
        Style
      </Link>
      <Link
        href="/blog?cat=fashion"
        className={`${styles.category} ${styles.fashion}`}
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=food"
        className={`${styles.category} ${styles.food}`}
      >
        Food
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.category} ${styles.culture}`}
      >
        Culture
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.category} ${styles.coding}`}
      >
        Coding
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.category} ${styles.travel}`}
      >
        Travel
      </Link>
    </div>
  );
};

export default MenuCategories;

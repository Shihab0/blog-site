import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>What&apos;s New</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subTitle}>Discover by topics</h2>
      <h1 className={styles.title}>Category</h1>
      <MenuCategories />
      <h2 className={styles.subTitle}>Chosen by editor</h2>
      <h1 className={styles.title}>Editors picks</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;

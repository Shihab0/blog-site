import React from "react";
import styles from "./pagination.module.css";
import Button from "../button/Button";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <Button className={styles.button}> Next</Button>
      <Button className={styles.button}>Previous</Button>
    </div>
  );
};

export default Pagination;

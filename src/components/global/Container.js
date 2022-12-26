import React from "react";

import styles from "../styles/Container.module.scss";

const Container = () => {
  return (
    <div className={styles["parent-container"]}>
      <div className={styles["blur-container"]}>
        <div className={styles["container"]}></div>
        <div className={styles["container-two"]}></div>
      </div>
    </div>
  );
};

export default Container;

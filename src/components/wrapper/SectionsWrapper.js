import React from "react";

import styles from "../styles/Wrapper.module.scss";

const SectionsWrapper = (props) => {
  return (
    <section className={styles["section-container"]}>{props.children}</section>
  );
};

export default SectionsWrapper;

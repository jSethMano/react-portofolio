import React from "react";

import styles from "../styles/Wrapper.module.scss";

const ButtonWrapper = (props) => {
  return <button className={styles["button-design"]}>{props.children}</button>;
};

export default ButtonWrapper;

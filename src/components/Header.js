import React from "react";
import Logo from "../assets/website-logo.svg";

import styles from "./styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <img src={Logo} alt="Website logo"></img>
    </header>
  );
};

export default Header;

import React from "react";
import Select from "react-select";

import style from "./styles/Navigation.module.scss";

const SELECT_OPTIONS = [
  // {
  //   default: "PROFILE",
  //   value: "about",
  // },
  {
    value: "ui",
    label: "UI",
  },
  {
    value: "logo",
    label: "LOGO",
  },
  {
    value: "website",
    label: "WEBSITE",
  },
];

const Navigation = (props) => {
  const onOptionSelectedHandler = (e) => {
    console.log(e.value);
    props.selectedMenu(e.value);
  };

  const navMenuHandler = (value) => {
    // value.preventDefault();
    console.log(value.target.textContent);
    props.selectedMenu(value.target.textContent.toLowerCase());
  };

  const selectStyle = {
    control: (styling) => ({
      ...styling,
      backgroundColor: "none",
      border: 0,
      boxShadow: "none",
    }),
    container: (styling) => ({
      ...styling,
      backgroundColor: "none",
      border: 0,
      color: "black",
      width: "140px",
      textAlign: "center",
    }),
    placeholder: (styling) => ({ ...styling, color: "#3f1f45" }),
    indicatorSeparator: (styling) => ({ ...styling, visibility: "hidden" }),
    dropdownIndicator: (styling) => ({
      ...styling,
      color: "#3f1f45",
    }),
  };

  return (
    <div className={style["nav-container"]}>
      <ul>
        <li>
          <a onClick={navMenuHandler} href="#">
            ABOUT
          </a>
        </li>
        <Select
          styles={selectStyle}
          onChange={onOptionSelectedHandler}
          placeholder="PROJECTS"
          options={SELECT_OPTIONS}
        />
        <li>
          <a
            onClick={navMenuHandler}
            target="_blank"
            href="https://github.com/jSethMano"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

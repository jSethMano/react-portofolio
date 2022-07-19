import React from "react";
import Select from "react-select";

const SELECT_OPTIONS = [
  {
    default: "PROFILE",
    value: "about",
  },
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

  return (
    <div>
      <ul>
        <li>
          <a onClick={navMenuHandler} href="#">
            ABOUT
          </a>
        </li>
        <Select
          onChange={onOptionSelectedHandler}
          placeholder="Profiles"
          options={SELECT_OPTIONS}
        />
        <li>
          <a
            onClick={navMenuHandler}
            target="_blank"
            href="https://github.com/jSethMano"
          >
            GITHUB
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

import React, { useState } from "react";
import styles from "./HamburgerMenu.module.scss";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [onClick, setOnClick] = useState(false);
  const [menuOnOff, setMenuOnOff] = useState(false);

  const overHidden = () => {
    setMenuOnOff(!menuOnOff);
    if (!onClick) {
      document.getElementById("root").classList.add("hidden");
      setOnClick(!onClick);
    } else {
      document.getElementById("root").classList.remove("hidden");
      setOnClick(!onClick);
    }
  };

  return (
    <>
      <div className={styles.menu}>
        <input
          type="checkbox"
          id="burger-checkbox"
          className={styles.burgerCheckbox}
          onClick={overHidden}
        />
        <label htmlFor="burger-checkbox" className={styles.burger}></label>
        <div className={styles.curtain}></div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <select>
              <option value="product">Product</option>
            </select>
          </li>
          <li className={styles.menuItem}>
            <Link to={"business"}>Business</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to={"blog"}>Blog</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to={"pricing"}>Pricing</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;

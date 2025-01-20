import React from "react";
import styles from "./Priority.module.scss";
import img1 from "../../../Assets/Vector_1.png";
import img2 from "../../../Assets/Vector_2.png";
import img3 from "../../../Assets/Vector_3.png";

const Priority = () => {
  return (
    <section className={styles.priority}>
      <div className="container">
        <div className={styles.box}>
          <h2>Ustunligimiz</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <img src={img1} width={208} height={208} alt="star" />
              <p>Lorem ipsum</p>
            </li>
            <li className={styles.item}>
              <img src={img2} width={147} height={208} alt="star" />
              <p>Lorem ipsum</p>
            </li>
            <li className={styles.item}>
              <img src={img3} width={196} height={208} alt="star" />
              <p>Lorem ipsum</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Priority;

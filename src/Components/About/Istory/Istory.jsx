import React from "react";
import styles from "./Istory.module.scss";
import content from "../../../Assets/Content.png";

const Istory = () => {
  return (
    <section className={styles.istory}>
      <div className="container">
        <div className={styles.box}>
          <span className={styles.top}>Photo Gallery</span>
          <h2>
            We're Global Food Delivery <span>Organic Company</span>
          </h2>
          <img className={styles.content} src={content} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Istory;

import React from "react";
import styles from "./About.module.scss";
import bucket from "../../../Assets/bucket.png";

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.left}>
            <h1>
              Ulgurji narxlarda <span>vositalar</span>
            </h1>
            <button>Buyurtma berish </button>
          </div>
          <img
            className={styles.img}
            src={bucket}
            width={731}
            height={731}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;

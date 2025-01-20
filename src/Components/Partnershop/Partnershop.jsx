import React from "react";
import styles from "./Partnershop.module.scss";
import partnershopProgress from "../../Assets/partnershopProgress.png";

const Partnershop = () => {
  return (
    <section className={styles.partnershop}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.left}>
            <span className={styles.top}>
              Stockie Operation Across the world
            </span>
            <h2 className={styles.title}>We have best team and best process</h2>
            <p className={styles.desc}>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy.
            </p>
            <button className={styles.btn}>Get Started</button>
          </div>
          <img src={partnershopProgress} alt="" className={styles.process} />
        </div>
      </div>
    </section>
  );
};

export default Partnershop;

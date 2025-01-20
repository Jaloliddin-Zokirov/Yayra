import React from "react";
import styles from "./Track.module.scss";

const Track = () => {
  return (
    <section className={styles.track}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.left}>
            <span>Why Choose Us</span>
            <h2>Track your crytpo portfolio on the best way possible</h2>
            <p>
              Mean if he they been no hold mr. Is at much do made. Latter person
              am secure of estate genius at.
            </p>
          </div>
          <div className={styles.right}>
            <input type="text" placeholder="Full Name" />
            <input type="tel" placeholder="Phone" />
            <button>SENT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;

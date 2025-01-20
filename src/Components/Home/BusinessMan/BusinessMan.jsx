import React from "react";
import styles from "./BusinessMan.module.scss";

const BusinessMan = () => {
  return (
    <section className={styles.businessMan}>
      <div className="container">
        <div className={styles.box}>
          <h2>We invite the businessmans to partnership</h2>
          <p>
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default BusinessMan;

import React from "react";
import styles from "./Testimonials.module.scss";
import man from "../../../Assets/man.png";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.box}>
          <span>Testimonials</span>
          <h2>Check what our clients are saying</h2>
          <div className={styles.content}>
            <div>
              <h3>Abdulaziz Kobiljonov</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <img
              className={styles.manImg}
              src={man}
              width={257}
              height={259}
              alt="man image"
            />
            <div className={styles.quotationMark}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="71"
                fill="none"
              >
                <path
                  fill="#377DF1"
                  d="m0 70.357 1.163-10.22c4.52.262 7.556-.786 9.106-3.144 1.55-2.49 2.325-5.634 2.325-9.433.129-3.93.194-7.992.194-12.185H0V0h23.25v47.167c0 8.647-2.325 15.067-6.975 19.26C11.625 70.618 6.2 71.928 0 70.356Zm38.75 0 1.163-10.22c4.52.262 7.556-.786 9.106-3.144 1.55-2.49 2.325-5.634 2.325-9.433.129-3.93.194-7.992.194-12.185H38.75V0H62v47.167c0 8.647-2.325 15.067-6.975 19.26-4.65 4.192-10.075 5.502-16.275 3.93Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import styles from "./Management.module.scss";

const Management = () => {
  return (
    <section className={styles.management}>
      <div className="container">
        <div className={styles.box}>
          <span>Project Management App</span>
          <h2>Download our catalog free trail to view and order today!</h2>
          <p>
            End-to-end payments and financial management in a single solution.
          </p>
          <div className={styles.btnBox}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M13.568 22.463c.03.03.063.06.097.088.014.012.03.023.045.034.02.014.038.03.058.042.019.013.038.024.057.035.018.01.035.022.054.032l.06.029.056.026.06.022c.02.007.04.015.062.021l.06.016.065.016.07.01c.02.003.038.007.058.009a1.344 1.344 0 0 0 .26 0c.02-.002.039-.006.058-.009l.07-.01.066-.016.058-.015.064-.023c.02-.007.039-.013.058-.021.02-.008.039-.018.058-.027l.06-.028.053-.032c.019-.011.038-.022.057-.035.02-.013.038-.027.056-.041l.047-.035c.033-.027.063-.055.093-.084l.004-.004 6.152-6.151a1.318 1.318 0 1 0-1.864-1.864l-3.902 3.901V2.199a1.318 1.318 0 0 0-2.636 0v16.15L9.28 14.448a1.318 1.318 0 1 0-1.865 1.864l6.152 6.151Z"
                />
                <path
                  fill="#fff"
                  d="M27.682 14.062c-.728 0-1.318.59-1.318 1.318v10.106H2.636V15.38a1.318 1.318 0 0 0-2.636 0v11.424c0 .728.59 1.318 1.318 1.318h26.364c.728 0 1.318-.59 1.318-1.318V15.38c0-.728-.59-1.319-1.318-1.319Z"
                />
              </svg>
              Download
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                fill="none"
              >
                <mask
                  id="a"
                  width="28"
                  height="29"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path fill="#fff" d="M0 .501h28v28H0v-28Z" />
                </mask>
                <g
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  mask="url(#a)"
                >
                  <path d="M27.18 19.582S21.279 27.681 14 27.681.82 19.582.82 19.582 6.721 11.484 14 11.484s13.18 8.098 13.18 8.098Z" />
                  <path d="M17.973 19.583a3.973 3.973 0 1 1-7.946 0 3.973 3.973 0 0 1 7.946 0ZM14 8.203V1.321M8.214 8.934l-3.17-6.11M19.786 8.934l3.169-6.11" />
                </g>
              </svg>
              View
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;

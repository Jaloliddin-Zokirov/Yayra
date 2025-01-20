import React from "react";
import styles from "./Slider.module.scss";
import arrow from "../../../Assets/arrow.png";
import { Link } from "react-router-dom";

const Slider = ({ backImg, currentPage, currentLink }) => {
  return (
    <section className={styles.slider}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.direction}>
            <Link to={"/"}>Main Page</Link>
            <span>{">"}</span>
            <Link to={`/${currentLink}`}>{currentPage}</Link>
          </div>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className={`${"carousel-item active"} ${styles.carousel}`}>
                <div className={styles.contentBox}>
                  <p className={styles.top}>
                    <span>25 Aug 2020</span>
                    <span>by Merkulove</span>
                  </p>
                  <h2>Practical Suggestions To Improve Usability Landing</h2>
                  <p className={styles.text}>
                    Fusce in nisi ut libero consequat mollis. Donec pulvinar
                    elementum nisl, non hendre
                  </p>
                  <button className={styles.readMore}>
                    Read More <img src={arrow} alt="" />
                  </button>
                </div>
                <img
                  src={backImg}
                  className={`${"d-block w-100"} ${styles.img}`}
                  alt="..."
                />
              </div>
              <div className={`${"carousel-item"} ${styles.carousel}`}>
                <div className={styles.contentBox}>
                  <p className={styles.top}>
                    <span>25 Aug 2020</span>
                    <span>by Merkulove</span>
                  </p>
                  <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                  <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente voluptatem accusantium placeat magni.
                  </p>
                  <button className={styles.readMore}>
                    Read More <img src={arrow} alt="" />
                  </button>
                </div>
                <img
                  src={backImg}
                  className={`${"d-block w-100"} ${styles.img}`}
                  alt="..."
                />
              </div>
              <div className={`${"carousel-item"} ${styles.carousel}`}>
                <div className={styles.contentBox}>
                  <p className={styles.top}>
                    <span>25 Aug 2020</span>
                    <span>by Merkulove</span>
                  </p>
                  <h2>Practical Suggestions To Improve Usability Landing</h2>
                  <p className={styles.text}>
                    Fusce in nisi ut libero consequat mollis. Donec pulvinar
                    elementum nisl, non hendre
                  </p>
                  <button className={styles.readMore}>
                    Read More <img src={arrow} alt="" />
                  </button>
                </div>
                <img
                  src={backImg}
                  className={`${"d-block w-100"} ${styles.img}`}
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="141"
                  height="137"
                  fill="none"
                >
                  <g filter="url(#a)">
                    <ellipse
                      cx="70.293"
                      cy="63.5"
                      fill="#fff"
                      rx="47.577"
                      ry="45.343"
                      transform="rotate(-180 70.293 63.5)"
                    />
                  </g>
                  <path
                    fill="url(#b)"
                    d="M75.716 90.383c.331.441.859.428 1.178-.028.312-.446.312-1.153 0-1.598L59.16 64.269l17.736-24.486c.33-.441.34-1.17.02-1.626-.32-.457-.847-.47-1.177-.029l-.021.029-18.324 25.3c-.325.449-.325 1.177 0 1.626l18.322 25.3Z"
                  />
                  <path
                    fill="url(#c)"
                    d="M76.315 37.806c.46-.002.834.512.835 1.148 0 .306-.088.6-.245.816L59.162 64.255 76.905 88.74c.326.45.326 1.179 0 1.628-.326.45-.854.45-1.18 0L57.394 65.07c-.325-.449-.325-1.177 0-1.626l18.331-25.3c.157-.216.369-.337.59-.337Z"
                  />
                  <defs>
                    <radialGradient
                      id="b"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(16 0 0 333.154 61.15 64.192)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#377DF1" />
                      <stop offset="1" stopColor="#0540A3" />
                    </radialGradient>
                    <radialGradient
                      id="c"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(16 0 0 333.154 61.15 64.192)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#377DF1" />
                      <stop offset="1" stopColor="#0540A3" />
                    </radialGradient>
                    <filter
                      id="a"
                      width="140.538"
                      height="136.07"
                      x=".023"
                      y=".003"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4.538" />
                      <feGaussianBlur stdDeviation="11.346" />
                      <feColorMatrix values="0 0 0 0 0.498039 0 0 0 0 0.721569 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_19_3082"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_19_3082"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="141"
                  height="137"
                  fill="none"
                >
                  <g filter="url(#a)">
                    <ellipse
                      cx="70.707"
                      cy="63.5"
                      fill="#fff"
                      rx="47.577"
                      ry="45.343"
                    />
                  </g>
                  <path
                    fill="url(#b)"
                    d="M64.284 36.617c-.331-.441-.859-.428-1.178.029-.312.445-.312 1.152 0 1.597L80.84 62.731 63.104 87.217c-.33.442-.34 1.17-.02 1.626.32.457.846.47 1.177.029a.848.848 0 0 0 .02-.029l18.325-25.3c.325-.449.325-1.177 0-1.626l-18.322-25.3Z"
                  />
                  <path
                    fill="url(#c)"
                    d="M63.685 89.194c-.46.002-.834-.512-.835-1.148 0-.306.088-.6.245-.816l17.743-24.485L63.095 38.26c-.326-.45-.326-1.179 0-1.628.325-.45.854-.45 1.18 0l18.33 25.299c.326.449.326 1.177 0 1.626l-18.33 25.3c-.157.216-.369.337-.59.337Z"
                  />
                  <defs>
                    <radialGradient
                      id="b"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(-16 0 0 -333.154 78.85 62.808)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#377DF1" />
                      <stop offset="1" stopColor="#0540A3" />
                    </radialGradient>
                    <radialGradient
                      id="c"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientTransform="matrix(-16 0 0 -333.154 78.85 62.808)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#377DF1" />
                      <stop offset="1" stopColor="#0540A3" />
                    </radialGradient>
                    <filter
                      id="a"
                      width="140.538"
                      height="136.07"
                      x=".438"
                      y=".003"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="4.538" />
                      <feGaussianBlur stdDeviation="11.346" />
                      <feColorMatrix values="0 0 0 0 0.498039 0 0 0 0 0.721569 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_19_3077"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_19_3077"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

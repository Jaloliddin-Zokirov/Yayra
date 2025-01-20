import React, { useState } from "react";
import styles from "./Product.module.scss";
import broom from "../../Assets/supurgi.png";
import { Link } from "react-router-dom";
import stars from "../../Assets/stars.png";
import size from "../../Assets/size.png";
import axios from "axios";

const Product = () => {
  const product = [
    {
      id: "132asd1qw1dsa354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
    {
      id: "132asd1qw1saddsa354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
    {
      id: "132asd1qasdw1dsa354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
    {
      id: "132asd1qfgw1dsa354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
    {
      id: "132asd1qw1dewrsa354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
    {
      id: "132asd1qw1dswea354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
    {
      id: "132asd1qw1dgdfsa354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
    {
      id: "132asd1qw1dwesa354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState(null);
  const sendMessage = (evt) => {
    evt.preventDefault();
    setLoading(true);
    const token = "8056613596:AAGcCMZwLHnzMrwVpVY9ESl64Seh0WdcrHI";
    const chat_id = "-1002174537471";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const messageContent = `Title: Floororganic - 108 \nColor: ${color}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        document.getElementById("myForm").reset();
        alert("Muvaffaqiyatli yuborildi");
      })
      .catch((err) => {
        console.log("Yuborishda xatolik: ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <section className={styles.product}>
        <div className="container">
          <div className={styles.direction}>
            <Link to={"/"}>Main Page</Link>
            <span>{">"}</span>
            <Link to={"/product"}>Product Page</Link>
          </div>
          <div className={styles.productBox}>
            <div className={styles.left}>
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={broom} className="d-block" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={broom} className="d-block" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={broom} className="d-block" alt="..." />
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
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
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
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
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
            <form className={styles.right} onSubmit={sendMessage} id="myForm">
              <h2 className={styles.productTitle} id="title">
                Floororganic - 108
              </h2>
              <p className={styles.productDesc} id="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt et dolore
              </p>
              <img src={stars} alt="" />
              <button
                className={styles.buyBtn}
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Buy now"}
              </button>

              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Color
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div
                      className={`accordion-body ${styles.labelBox}`}
                      id="color"
                      onChange={(evt) => setColor(evt.target.id)}
                    >
                      <label>
                        <input type="radio" name="color" id="black" required />
                        Black
                      </label>
                      <label>
                        <input type="radio" name="color" id="white" required />
                        White
                      </label>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Size
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className={`accordion-body ${styles.labelBox}`}>
                      <img className={styles.size} src={size} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className={styles.also}>
        <div className="container">
          <div className={styles.alsoBox}>
            <h2 className={styles.alsoTitle}>You May Also Like</h2>
            <ul className={styles.list}>
              {product?.map((el) => {
                return (
                  <li className={styles.item} key={el.id}>
                    <span className={styles.top}>{el.name}</span>
                    <img src={el.image} alt="" />
                    <h3 className={styles.title}>{el.title}</h3>
                    <span className={styles.bottom}>{el.type}</span>
                    <div className={styles.btnBox}>
                      <button className={styles.buyBtn}>Buy now</button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="22"
                          fill="none"
                        >
                          <path
                            fill="#05192B"
                            stroke="#05192B"
                            strokeWidth=".225"
                            d="M22.492 16.784c.455 0 .814-.386.814-.85 0-.466-.359-.851-.814-.851H3.395l2.832-2.978a.877.877 0 0 0 0-1.198.79.79 0 0 0-1.156 0l-4.21 4.427a.877.877 0 0 0 0 1.198l4.21 4.428a.795.795 0 0 0 .578.25c.21 0 .42-.084.578-.25a.877.877 0 0 0 0-1.199l-2.832-2.977h19.097Zm.578-11.78L18.86.575l-1.075 1.121-.081.078 2.832 2.977H1.438c-.455 0-.814.386-.814.85 0 .465.36.851.814.851h19.098l-2.832 2.978a.877.877 0 0 0 0 1.198.795.795 0 0 0 .577.251c.21 0 .42-.084.578-.25l4.21-4.428a.877.877 0 0 0 0-1.199Z"
                          />
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="21"
                          fill="none"
                        >
                          <path
                            fill="#05192B"
                            d="M23.586 4.675a2.532 2.532 0 0 0-.864-.665 2.488 2.488 0 0 0-1.058-.235h-15.3l-.35-2.018A1.727 1.727 0 0 0 5.436.738 1.67 1.67 0 0 0 4.351.336H1.682a.837.837 0 0 0-.597.252.868.868 0 0 0 0 1.216.837.837 0 0 0 .597.251h2.669L6.514 14.54c.106.608.423 1.158.894 1.547a3.012 3.012 0 0 0-.66 1.872c0 .799.31 1.564.865 2.128a2.928 2.928 0 0 0 2.09.881c.783 0 1.535-.317 2.089-.88.554-.565.865-1.33.865-2.129a3.023 3.023 0 0 0-.296-1.289h4.812a3.022 3.022 0 0 0-.295 1.29c-.004.483.106.961.321 1.392.216.431.53.803.917 1.085a2.905 2.905 0 0 0 2.703.388 2.95 2.95 0 0 0 1.175-.785c.324-.354.56-.782.686-1.248a3.062 3.062 0 0 0-.567-2.719 2.58 2.58 0 0 0 .88-1.59l1.17-7.737a2.616 2.616 0 0 0-.577-2.071ZM10.969 17.959c0 .256-.075.505-.214.717-.139.212-.337.377-.568.475a1.246 1.246 0 0 1-1.38-.28 1.312 1.312 0 0 1-.275-1.405c.096-.236.259-.437.467-.579a1.25 1.25 0 0 1 1.599.16c.237.242.37.57.37.912Zm8.864 1.29a1.25 1.25 0 0 1-.703-.217 1.286 1.286 0 0 1-.467-.579 1.312 1.312 0 0 1 .275-1.405 1.245 1.245 0 0 1 1.38-.28c.231.098.429.263.568.475a1.306 1.306 0 0 1-.157 1.628c-.238.242-.56.378-.896.378Zm1.496-5.027a.864.864 0 0 1-.285.521.835.835 0 0 1-.549.208H9.008a.835.835 0 0 1-.543-.201.863.863 0 0 1-.29-.51L6.664 5.495h15.001a.832.832 0 0 1 .64.3.865.865 0 0 1 .194.69l-1.169 7.738Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

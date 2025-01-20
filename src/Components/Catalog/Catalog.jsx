import React, { useState } from "react";
import styles from "./Catalog.module.scss";
import broom from "../../Assets/supurgi.png";
import { Link } from "react-router-dom";

const Catalog = () => {
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
    {
      id: "132asd1qw1dhassa354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
    {
      id: "132asd1qw1dsawer354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
    {
      id: "132asd1qwerw1dsa354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
    {
      id: "132asd1qw1dfgsa354as1d",
      name: "Yayra",
      image: broom,
      title: "Supurgi",
      type: "Basin mixer",
    },
  ];

  const [id, setId] = useState(1);

  const handleClick = (evt) => {
    if (evt.target.id) {
      document.getElementById(id).classList.remove(styles.on);
      document.getElementById(evt.target.id).classList.add(styles.on);
      setId(evt.target.id);
    }
  };

  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.direction}>
            <Link to={"/"}>Main Page</Link> 
            <span>{">"}</span>
            <Link to={"/catalog"}>Catalogue</Link>
          </div>
          <div className={styles.center}>
            <div className={styles.left}>
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
                      Brand
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className={`accordion-body ${styles.labelBox}`}>
                      <label>
                        <input type="checkbox" />
                        BOARDS collection LEAD 2022 (22)
                      </label>
                      <label>
                        <input type="checkbox" />
                        BOARDS collection 2020 (192)
                      </label>
                      <label>
                        <input type="checkbox" />
                        ROCKO -Wasserfeste Wandverkleidung (0)
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
                      Weight
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className={`accordion-body ${styles.labelBox}`}>
                      <label>
                        <input type="checkbox" />
                        medium (84)
                      </label>
                      <label>
                        <input type="checkbox" />
                        dark (63)
                      </label>
                      <label>
                        <input type="checkbox" />
                        bright (67)
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
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Material
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                  >
                    <div className={`accordion-body ${styles.labelBox}`}>
                      <label>
                        <input type="checkbox" />
                        Wood (104)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Acacia (1)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Ash (3)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Beech (4)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Cherry (2)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Elm (5)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Fir (3)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Hemlock (3)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Linde (2)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Mahogany (1)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Maple (3)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Oak (58)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Pine (5)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Spruce (4)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Teak (1)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Walnut (8)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Wenge (1)
                      </label>
                      <label>
                        <input type="checkbox" />
                        Yacht Wood (0)
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
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      Colour
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    className="accordion-collapse collapse"
                  >
                    <div className={`accordion-body ${styles.labelBox}`}>
                      <label>
                        <input type="checkbox" />
                        BOARDS collection LEAD 2022 (22)
                      </label>
                      <label>
                        <input type="checkbox" />
                        BOARDS collection 2020 (192)
                      </label>
                      <label>
                        <input type="checkbox" />
                        ROCKO -Wasserfeste Wandverkleidung (0)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className={styles.right}>
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
          <div className={styles.bottom} onClick={(evt) => handleClick(evt)}>
            <span className={styles.on} id="1">
              1
            </span>
            <span id="2">2</span>
            <span id="3">3</span>
            <span id="4">4</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

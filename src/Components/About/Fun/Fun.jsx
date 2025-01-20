import React from "react";
import styles from "./Fun.module.scss";
import playIcon from "../../../Assets/plaIcon.png";
import funVideo from "../../../Assets/funVideo.png";

const Fun = () => {
  return (
    <section className={styles.fun}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.left}>
            <span className={styles.top}>About Company</span>
            <h2>
              Fun Facts About <span>Farmino</span>
            </h2>
            <p>
              Fusce in nisi ut libero consequat mollis. Donec pulvinar elementum
              nisl, non hendrerit ipsum consequat eu. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed ullamcorper, velit at
              mollis vehicula, neque arcu ultricies eros
            </p>
            <button>
              <img src={playIcon} alt="" />
              Watch Video
            </button>
          </div>
          <img className={styles.right} src={funVideo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Fun;

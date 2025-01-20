import React from "react";
import styles from "./BlogPosts.module.scss";
import image1 from "../../../Assets/image_1.png";
import image2 from "../../../Assets/image_2.png";
import image3 from "../../../Assets/image_3.png";
import image4 from "../../../Assets/image_4.png";
import image5 from "../../../Assets/image_5.png";
import image6 from "../../../Assets/image_6.png";

const BlogPosts = () => {
  return (
    <section className={styles.BlogPosts}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.top}>
            <h2>Our Latest Blog Posts</h2>
            <button>See All Blog Posts</button>
          </div>
          <div className={styles.bottom}>
            <ul className={styles.left}>
              <li className={styles.lItem}>
                <img src={image1} width={394} height={281} alt="image" />
                <p>
                  <span>08-11-2021</span>
                  <span>Category</span>
                </p>
                <h3>
                  Believing neglected so so allowance existence departure.
                </h3>
                <p>
                  Blessing welcomed ladyship she met humoured sir breeding her.
                  Six curiosity day assurance bed necessary.
                </p>
              </li>
              <li className={styles.lItem}>
                <img src={image2} width={394} height={281} alt="image" />
                <p>
                  <span>08-11-2021</span>
                  <span>Category</span>
                </p>
                <h3>
                  In design active temper be uneasy. Thirty for remove plenty
                  regard you.
                </h3>
                <p>
                  Yet preference connection unpleasant yet melancholy but end
                  appearance. And excellence partiality estimating terminated
                  day everything.
                </p>
              </li>
            </ul>
            <ul className={styles.right}>
              <li className={styles.rItem}>
                <img src={image3} width={131} height={96} alt="image" />
                <div>
                  <p>
                    <span>08-11-2021</span>
                    <span>Category</span>
                  </p>
                  <p>Partiality on or continuing in particular principles</p>
                </div>
              </li>
              <li className={styles.rItem}>
                <img src={image4} width={131} height={96} alt="image" />
                <div>
                  <p>
                    <span>08-11-2021</span>
                    <span>Category</span>
                  </p>
                  <p>Partiality on or continuing in particular principles</p>
                </div>
              </li>
              <li className={styles.rItem}>
                <img src={image5} width={131} height={96} alt="image" />
                <div>
                  <p>
                    <span>08-11-2021</span>
                    <span>Category</span>
                  </p>
                  <p>Partiality on or continuing in particular principles</p>
                </div>
              </li>
              <li className={styles.rItem}>
                <img src={image6} width={131} height={96} alt="image" />
                <div>
                  <p>
                    <span>08-11-2021</span>
                    <span>Category</span>
                  </p>
                  <p>Partiality on or continuing in particular principles</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;

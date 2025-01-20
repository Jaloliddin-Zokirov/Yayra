import React from "react";
import styles from "./Faq.module.scss";

const Faq = () => {
  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.box}>
          <h2>FAQ</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className={`${"accordion-button"} ${styles.title}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  She met humoured sir breeding her. Six curiosity day assurance
                  bed necessary.
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className={styles.desc}>
                    Relation so in confined smallest children unpacked delicate.
                    Why sir end believe uncivil respect. Always get adieus
                    nature day course for common. My little garret repair to
                    desire he esteem.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className={`${"accordion-button collapsed"} ${styles.title}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  And excellence partiality estimating terminated day
                  everything?
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className={styles.desc}>
                    Relation so in confined smallest children unpacked delicate.
                    Why sir end believe uncivil respect. Always get adieus
                    nature day course for common. My little garret repair to
                    desire he esteem.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className={`${"accordion-button collapsed"} ${styles.title}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Latter person am secure of estate genius at?
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className={styles.desc}>
                    Relation so in confined smallest children unpacked delicate.
                    Why sir end believe uncivil respect. Always get adieus
                    nature day course for common. My little garret repair to
                    desire he esteem.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className={`${"accordion-button collapsed"} ${styles.title}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Whatever landlord yourself at by pleasure of children be?
                </button>
              </h3>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className={styles.desc}>
                    Relation so in confined smallest children unpacked delicate.
                    Why sir end believe uncivil respect. Always get adieus
                    nature day course for common. My little garret repair to
                    desire he esteem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

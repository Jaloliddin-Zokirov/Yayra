import React, { useState } from "react";
import styles from "./Track.module.scss";
import axios from "axios";

const Track = () => {
  const [loading, setLoading] = useState(false);
  const sendMessage = (evt) => {
    evt.preventDefault();
    setLoading(true);
    const token = "8056613596:AAGcCMZwLHnzMrwVpVY9ESl64Seh0WdcrHI";
    const chat_id = "-1002174537471";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phone").value;
    const messageContent = `Name: ${name} \nPhone: ${phoneNumber}`;

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
          <form className={styles.right} onSubmit={sendMessage} id="myForm">
            <input type="text" placeholder="Full Name" id="name" required />
            <input type="tel" placeholder="Phone" id="phone" required />
            <button type="submit" disabled={loading}>
              {loading ? "SENDING..." : "SEND"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Track;

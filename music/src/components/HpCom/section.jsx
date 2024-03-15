import React from "react";
import "animate.css";
import styles from "../styles/styles.css";

function Sect() {
  const containerClassName = styles.container;
  return (
    <>
      <section>
        <div className="filter"></div>

        <div className="introduce">
          <h2>簡介</h2>
          <br />
          <p className={styles.container}>
            這是一個可以買beat又可以報名音樂製作課程的網站，你有音樂夢想嗎?
            <br />
            讓入魂音樂來幫你圓夢，除了可以買beat以外，你也可以來這邊報名一對一的音樂製作課程，
            <br />
            有一系列的教學任君挑選，不只教你音樂編曲技術，
            <br />
            也會帶你去認識一些音樂文化背景，培養你對聲音對音樂風格的美感。
            <br />
            專業老師一對一手把手教學帶你一起飛!!!
          </p>
        </div>
        <div className="teacher">
          <h2>師資介紹: Häruki</h2>
          <p className={containerClassName}>
            來自國華街的好聲音，Häruki有超過十年的音樂製作經驗， <br />
            擅長的曲風有嘻哈，流行，R&B,K-Pop..等曲風。
            <br />
            與很多來自不同領域的歌手合作過，相信經驗豐富的他可以帶給你很多能幫助到你的觀念。
          </p>
        </div>
        {/* <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/3Q1TjMBoX2Y"
             title="YouTube video player" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; 
             encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    --> */}

        <iframe
          title="music address"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14690.85403533569!2d120.1985975!3d22.9975602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3317b089387f1a5!2z5YWl6a2C6Z-z5qiC5bel5L2c5a6k!5e0!3m2!1szh-TW!2stw!4v1673231426294!5m2!1szh-TW!2stw"
          width="466"
          height="350"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14690.85403533569!2d120.1985975!3d22.9975602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3317b089387f1a5!2z5YWl6a2C6Z-z5qiC5bel5L2c5a6k!5e0!3m2!1szh-TW!2stw!4v1673231426294!5m2!1szh-TW!2stw" width="400" height="300" style="border:0;"
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             --> */}
      </section>
    </>
  );
}
export default Sect;

import styles from "./AboutBox1.module.css";
import myface2 from "../../img/myface2.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function AboutBox1 () {

  useEffect(() => {
    AOS.init({duration: 600});
  }, []);

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.mask}>
          <img className={styles.photo} src={myface2} alt="my pretty face"/>
        </div>
        <div className={styles.content}>
          <p data-aos="fade-right" data-aos-easing="ease-in-sine">DO YOU WANT TO KNOW MORE ABOUT ME?</p>
          <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">Let`s Talk About Bruno.</h1>
        </div>
      </div>
    </>
  )
}

export default AboutBox1
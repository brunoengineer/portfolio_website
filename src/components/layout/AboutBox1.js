import styles from "./AboutBox1.module.css";
import myface1 from "../../img/myface1.jpg";

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
          <img className={styles.photo} src={myface1} alt="my pretty face"/>
        </div>
        <div className={styles.content}>
          <p data-aos="fade-right" data-aos-easing="ease-in-sine">DO YOU WANT TO KNOW MORE ABOUT ME?</p>
          <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">Let's Talk About Bruno.</h1>
          <a href="https://drive.google.com/file/d/1DXjMJH-ccw78fv05UwBXo0MvGcPVRBcZ/view?usp=sharing" target="_blank" rel="noreferrer"><button className={styles.resumeButton}>Resume</button></a>
        </div>
      </div>
    </>
  )
}

export default AboutBox1
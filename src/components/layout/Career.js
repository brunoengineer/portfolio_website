import careerMap from "../../img/careerPath.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import styles from "./Career.module.css";



function Career () {

  useEffect(() => {
    AOS.init({duration: 600});
  }, []);

  return (
<>
  <div className={styles.caixa1}>
    <h1>This is My Career History</h1>

    <a href="../../img/careerPath.png" target="blanck_">
      <img className={styles.careerMap} src={careerMap} alt="careerMap" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
    </a>
  </div>
</>
  )
}

export default Career
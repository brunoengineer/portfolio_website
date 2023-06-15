import carrerMap from "../../img/carrermap.png";
import carrerMap2 from "../../img/carrermap2.png";
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
    <h1>This is My Carrer History</h1>

    <a href="https://www.canva.com/design/DAFjQZguAak/WfPIyzExDyC7hIb0_VqsOA/view?utm_content=DAFjQZguAak&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="blanck_">
      <img className={styles.carrerMap} src={carrerMap} alt="carrerMap" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
    </a>

    <a href="https://www.canva.com/design/DAFlyxYlwfg/dlDHLdXPIK12iKJX-1px2w/view?utm_content=DAFlyxYlwfg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="blanck_">
      <img className={styles.carrerMap2} src={carrerMap2} alt="carrerMap2" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
    </a>
  </div>
</>
  )
}

export default Career
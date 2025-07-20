import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import styles from "./Vibes.module.css";
import bb from "../../img/bb.jpg";



function Mywife () {

  useEffect(() => {
    AOS.init({duration: 600});
  }, []);

  return (
<>
  <div className={styles.caixa1}>
    <h1>My wife and best friend, Brunna. With her I can conquer the world.</h1>
      <img className={styles.travelPanel} src={bb} alt="My Wife" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
  </div>
</>
  )
}

export default Mywife
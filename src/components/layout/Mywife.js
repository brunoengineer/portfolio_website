import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import styles from "./Mywife.module.css";



function Mywife () {

  useEffect(() => {
    AOS.init({duration: 600});
  }, []);

  return (
<>
  <div className={styles.caixa1}>
    <h1>My wife and best friend, Brunna. With her I can conquer the world.</h1>
      <img className={styles.travelPanel} src="https://cdn.discordapp.com/attachments/823623035428536350/1120710925415096461/BB.jpg" alt="My Wife" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
  </div>
</>
  )
}

export default Mywife
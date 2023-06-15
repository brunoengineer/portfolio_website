import Hero from "../layout/Hero.js";
import styles from "./home.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Album from "../layout/Album.js";

function Home () {

useEffect(() => {
  AOS.init({duration: 600});
}, []);

  return (
    <>
      <Hero />
      <Album />
      <div className={styles.caixa2}>
        <h1>Skills</h1>
        <div className={styles.skills} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img className={styles.skillLogo} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
          <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img className={styles.skillLogo} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img className={styles.skillLogo} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img className={styles.skillLogo} src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
          <a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><img className={styles.skillLogo} src="https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg" width="36" height="36" alt="React" /></a>
          <a href="https://www.figma.com/blog/figma-on-figma-how-we-built-figma-dot-coms-design-system/" target="_blank" rel="noreferrer"><img className={styles.skillLogo} src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" width="36" height="36" alt="Figma" /></a>
          <a href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noreferrer"><img className={styles.skillLogo} src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" width="36" height="36" alt="Premiere" /></a>
        </div>
        <p>I also possess strong skills in Git, Excel, PowerPoint, Premiere Pro, Google Apps, and social media management. These complementary abilities allow me to efficiently analyze data, create captivating presentations, edit professional videos, collaborate seamlessly using cloud-based tools, and work with social media platforms.</p>
      </div>
    </>
  )
}

export default Home
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <a href="https://github.com/BrunoWebDesigner" target="blank_">
          <li><FaGithub /></li>
        </a>
        <a href="https://www.linkedin.com/in/brunoux-peres/" target="blank_">
        <li><FaLinkedin /></li>
        </a>
      </ul>
      <p>by Bruno Peres - All Rights Reserved &copy; 2023</p>
    </footer>
  )
}

export default Footer
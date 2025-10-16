import { FaGithub, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <a href="https://github.com/brunoengineer" target="blank_">
          <li><FaGithub /></li>
        </a>
        <a href="https://www.linkedin.com/in/brunopereschristino/" target="blank_">
        <li><FaLinkedin /></li>
        </a>
      </ul>
      <p>by Bruno Peres - All Rights Reserved &copy; 2025</p>
    </footer>
  )
}

export default Footer
import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  const closeNavbar = () => {
    if (window.innerWidth <= 1040) {
      setClick(!click);
    } else {
      setClick(click);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? `${styles.navbarBg}` : `${styles.navbar}`}>
      <Container >
        <Link to="/">
          <img className={styles.logo} src={logo} Alt="Portfolio" />
        </Link>
        <ul className={click ? `${styles.list2}` : `${styles.list}`}>
          <li className={styles.item}><Link onClick={closeNavbar} to="/">Home</Link></li>
          <li className={styles.item}><Link onClick={closeNavbar} to="/about">About</Link></li>
          <li className={styles.item}><Link onClick={closeNavbar} to="/contact">Contact</Link></li>
        </ul>

        <div className= {styles.hamburger} onClick={handleClick}>

          {/* Função IF para o Botão de Hamburger */}
          {click ? (
            <FaTimes  size={30} style={{ color: "#fff" }}/>
          ) : (
            <FaBars  size={30} style={{ color: "#fff" }}/>
          )}
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
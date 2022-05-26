import React from 'react';
import style from './css/navbar.module.css'

const Navbar = () => {
    return ( 
        <nav className={style.nav}>
            <div className={style.logo}>
                <h1>Sasuke</h1>
            </div>
            <div className={style.links}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact Us</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
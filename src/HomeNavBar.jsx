import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const HomeNavBar = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    function showMobileNavLinks() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    function hideMobileNavLinks() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    function scrollTop(){
        window.scrollTo({top: 0})
    }


    return (
        <>
          
            <nav className="navbar">
                <Link to="/" className="nav-branding" onClick={scrollTop}><img src="images/racha-logo.png" alt="nav-logo" className="nav-logo" /></Link>
                <Link className="nav-text" to="/" onClick={scrollTop}><h1>Racha Tea Boba and Desserts</h1></Link>

                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={scrollTop}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#about-section" className="nav-link" onClick={hideMobileNavLinks}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#menu-section" className="nav-link" onClick={hideMobileNavLinks}>Menu</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact-section" className="nav-link" onClick={hideMobileNavLinks}>Contact</a>
                    </li>
                </ul>
                <div className="hamburger" onClick={showMobileNavLinks}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </>
    )
}

export default HomeNavBar
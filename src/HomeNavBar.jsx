import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react';


const HomeNavBar = () => {

    const [isActive, setActive] = useState(false);
    const toggleIsActive = () => {
        setActive(!isActive);
    }

    function scrollTop() {
        setActive(!isActive);
        window.scrollTo({ top: 0 })
    }


    return (
        <>

            <nav className="navbar">
                <Link to="/" className="nav-branding" onClick={scrollTop}><img src="images/racha-logo.png" alt="nav-logo" className="nav-logo" /></Link>
                <Link className="nav-text" to="/" onClick={scrollTop}><h1>Racha Tea Boba and Desserts</h1></Link>

                <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={scrollTop}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#about-section" className="nav-link" onClick={toggleIsActive}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#menu-section" className="nav-link" onClick={toggleIsActive}>Menu</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact-section" className="nav-link" onClick={toggleIsActive}>Contact</a>
                    </li>
                </ul>
                <div className="hamburger" onClick={toggleIsActive}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </>
    )
}

export default HomeNavBar
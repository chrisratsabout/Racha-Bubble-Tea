import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const HomeNavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-branding"><img src="images/racha-logo.png" alt="nav-logo" className="nav-logo" /></Link>
            <Link className="nav-text" to="/"><h1>Racha Tea Boba and Desserts</h1></Link>
        
            <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="index.html#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#menu-section" className="nav-link">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about-section" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact-section" className="nav-link">Contact</a>
                    </li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
        </nav>
    )
}

export default HomeNavBar
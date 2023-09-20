import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const PayNavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-branding"><img src="images/racha-logo.png" alt="nav-logo" className="nav-logo" /></Link>
            <Link className="nav-text" to="/"><h1>Racha Tea Boba and Desserts</h1></Link>
        </nav>
    )
}

export default PayNavBar
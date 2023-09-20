import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Top() {
    return (
        <>
            <div className="top-section">
                <div className="top-section-left">
                    <h1 className="top-section-text">Welcome to <p className="distinct-text text">Racha Tea Boba and Desserts</p>
                    </h1><br />
                    <p>Need some bubble tea?</p>
                    <br />
                    <Link to="/menu"><button className="section-btn"><b>Order Online</b></button></Link>
                 

                </div>
                <div className="top-section-right">
                    <img src="images/yellow-cup.png" alt="cup-of-fruit-tea" className="cup" />
                </div>
            </div>
        </>
    )
}
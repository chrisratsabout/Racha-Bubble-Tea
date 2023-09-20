import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function HomeMenu() {

    return (
        <>
            <section id="menu-section">
                <h2 className="section-title"><i className="fa-solid fa-utensils"></i> Menu</h2>
                <div className="menu-section">
                    <div className="menu-section-left">
                        <img src="images/banh-mi.png" alt="bookstack" className="top-section-picture" />
                    </div>
                    <div className="menu-section-right">
                        <p>Our menu consists of freshly brewed milk tea, fruit tea, carbonated drinks, coffee and well as food
                            items such as Bánh mì and egg waffles. </p>
                        <Link to="/menu"><button className="section-btn" ><b>View Menu</b></button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
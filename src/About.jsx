import React from "react";

export default function About() {
    return (
        <>
            <section id="about-section">
                <h2 className="section-title"><i className="fa-regular fa-id-card"></i> About</h2>
                <div className="about-section">
                    <div className="about-section-left">
                        <p>We are a <b className="distinct-text text">women-owned</b> bubble tea shop that offers a full spectrum of
                            handcrafted drinks and Vietnamese foods/desserts.</p><br />
                        <p>It took us 3 years to perfect and gather all of the equipment that was needed to run this shop! We
                            are so happy to be able to serve the Columbus area our fresh tea that does not include artificial
                            flavoring and introduce them to fresh Vietnamese desserts and snacks. Also we are the only ones in
                            Ohio that has tea espresso machines that brew the tea to every order! </p>
                    </div>
                    <div className="about-section-right">
                        <img src="images/drinks.png" alt="drinks" className="top-section-picture" />
                    </div>

                </div>
            </section>
        </>
    )
}
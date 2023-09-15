import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer id="contact-section">
                <p className="copyright-text">&#169; Copyright Racha Tea Boba and Desserts <span className="year">{currentYear}</span>. All
                    rights
                    reserved.</p>

            </footer >
        </>
    )
}
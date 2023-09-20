import React from "react";

export default function HomeFooter() {
    const currentYear = new Date().getFullYear();
    return (
        <>
<footer id="contact-section">
        <div className="contact-section">
            <h2 className="section-h2  ">CONTACT</h2>
            <button className="message-me-btn  "><b>Message Us</b> <i className="fa-regular fa-pen-to-square"></i></button>
            <div className="info-container">

                <div className="location">
                    <h4>ADDRESS</h4>
                    <br />
                    <p>561 S Hamilton Rd, Columbus, OH 43213</p>
                </div>
                <div className="hours">
                    <h4>HOURS</h4>
                    <br />
                    <p>Sunday: 12PM - 9PM</p>
                    <p>Monday: 12PM - 9PM</p>
                    <p>Tuesday: Closed</p>
                    <p>Wednesday: 12PM - 9PM</p>
                    <p>Thursday: 12PM - 9PM</p>
                    <p>Friday: 12PM - 9PM</p>
                    <p>Saturday: 12PM - 9PM</p>
                </div>
                <div className="phone">
                    <h4>PHONE</h4>
                    <br />
                    <p>(614) 674-6459</p>
                </div>
            </div>

          
            <div className="social-btn-container">
                <a className="  " href="https://www.facebook.com/rachateaboba/" target="_blank"><button className="social-btn"><i className="fa-brands fa-facebook"></i></button></a>
                <a className=" " href="https://www.instagram.com/rachateaboba/" target="_blank"><button className="social-btn"><i className="fa-brands fa-instagram"></i></button></a>
                <a className=" " href="https://www.yelp.com/biz/racha-tea-boba-and-desserts-columbus" target="_blank"><button className="social-btn"><i className="fa-brands fa-yelp"></i></button></a>
            </div>

            <p className="copyright-text  ">&#169; Copyright Racha Tea Boba and Desserts {currentYear}. All rights
                reserved.</p>

        </div>
    </footer>
        </>
    )
}
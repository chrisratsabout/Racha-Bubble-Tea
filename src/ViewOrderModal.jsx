import React from "react";



export default function ViewOrderModal({ closeViewOrderModal, order, subtotal, taxAmount, total }) {

    return (
        <>
            <div className="order-modal">
                <i className="fa-solid fa-x close-order-btn" onClick={() => closeViewOrderModal(false)}></i>
                <h3>Order Items:</h3>
                <div className="order-content">
                    {order}
                </div>
                <div className="totals-container">
                    <p>Subtotal: $<span className="subtotal">{subtotal}</span></p>
                    <p>Tax: $<span className="tax-amount">{taxAmount}</span></p>
                    <p><b>Total</b>: $<span className="total">{total}</span></p>
                </div>
                <button className="pay-now-btn">Pay Now <i className="fa-regular fa-credit-card"></i></button>

            </div>
        </>
    )
}
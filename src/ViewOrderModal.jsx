import React from "react";



export default function ViewOrderModal({ closeViewOrderModal, order, subtotal, taxAmount, total, deleteItem, incrementQuantity, decrementQuantity}) {

    const orderList = order.map((item) => {
        return <div className="order-item" key={item.menuItemId} data-menuitemid={item.menuItemId}>
                        <p className="order-item-name"><b>{item.name}</b></p>
                        <div className="quantity-order-modal">
                        <p>Quantity: </p><span className="quantity-order-item">{item.quantity}</span> <i className="fa-solid fa-circle-minus" onClick={decrementQuantity}></i><i className="fa-solid fa-circle-plus" onClick={incrementQuantity}></i>
                        </div>
                        
                        <p>Price: ${item.price.toFixed(2)}</p>
                        <i className="fa-solid fa-trash delete-order-btn" data-id={item.orderItemId} onClick={deleteItem}></i>
                        </div>
    })




    return (
        <>
            <div className="order-modal">
                <i className="fa-solid fa-x close-order-btn" onClick={() => closeViewOrderModal(false)}></i>
                <h3>Order Items:</h3>
                <div className="order-content">
                   {orderList}
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
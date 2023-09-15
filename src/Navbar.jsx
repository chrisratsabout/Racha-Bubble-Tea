import React from "react";
import { useState } from "react";
import ViewOrderModal from "./ViewOrderModal";


export default function Navbar() {

const [isActive, setActive] = useState(false)
const [order, setOrder] = useState(null)
const [subtotal, setSubtotal] = useState(null)
const [taxAmount, setTaxAmount] = useState(null)
const [total, setTotal] = useState(null)
const [deleteItemId, setDeleteItemId] = useState("")


const handleClick = () => {
    setActive(true)
    fetch("http://localhost:8080/order")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        render(data)
        mapOrder(data)

    })
}

const mappedOrder = [];
function render(orderItems){
    for(let i = 0; i < orderItems.selectedItemList.length; i++){
        mappedOrder.push(<div className="order-item" key={orderItems.selectedItemList[i].orderItemId}>
        <p className="order-item-name"><b>{orderItems.selectedItemList[i].name}</b></p>
        <p>Quantity: {orderItems.selectedItemList[i].quantity}</p> 
        <p>Price: ${orderItems.selectedItemList[i].price.toFixed(2)}</p>
        <i className="fa-solid fa-trash delete-order-btn" data-id={orderItems.selectedItemList[i].orderItemId} onClick={deleteItem}></i>
        </div>)
    }
}

function mapOrder(orderItems){
    setOrder(mappedOrder)
    setSubtotal(orderItems.subtotal.toFixed(2))
    setTaxAmount(orderItems.taxAmount.toFixed(2))
    setTotal(orderItems.total.toFixed(2))
}

function deleteItem (e){
    removeOrderItem(e.target.dataset.id) 
   
}

function removeOrderItem(id){
    console.log(deleteItemId)
    fetch("http://localhost:8080/order/" + id, {
        method: 'DELETE',
    })
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            console.log(data);
            alert('Item removed!');
            location.reload();
        })
        .catch((err) => {
            console.error(err);
            alert('Could not delete order item!');
        });
}

    return (
        <>
            <nav className="navbar">
                <a href="https://chrisratsabout.github.io/racha/" className="nav-branding"><img src="images/racha-logo.png" alt="nav-logo" className="nav-logo" /></a>
                <a className="nav-text" href="https://chrisratsabout.github.io/racha/"><h1>Racha Boba Tea and Desserts</h1></a>
                <button className="new-view-order-btn" onClick={handleClick}><i className="fa-solid fa-cart-shopping"></i></button>
            </nav>
            {(order && isActive) && <ViewOrderModal closeViewOrderModal={setActive} order={order} subtotal={subtotal} taxAmount={taxAmount} total={total}/>}
        </>
    )
}
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

function incrementQuantity(e){
    let quantity = 1;
    console.log(quantity)
    console.log(e.target.parentElement.parentElement.dataset.menuitemid)

    let menuItemId = parseInt(e.target.parentElement.parentElement.dataset.menuitemid);
    const newOrder = { menuItemId, quantity };
    console.log(newOrder)

    fetch("http://localhost:8080/order/items", {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOrder)

    })
        .then((response) => {
            if (response.ok) {
                alert('Saved!');
                location.reload();
            }
        })
        .catch((err) => {
            console.error(err);
            alert('Could not add item!');
        });
}

function decrementQuantity(e){
    let quantity = -1;
    console.log(quantity)
    console.log(e.target.parentElement.parentElement.dataset.menuitemid)

    let menuItemId = parseInt(e.target.parentElement.parentElement.dataset.menuitemid);
    const newOrder = { menuItemId, quantity };
    console.log(newOrder)

    fetch("http://localhost:8080/order/items", {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOrder)

    })
        .then((response) => {
            if (response.ok) {
                alert('Saved!');
                location.reload();
            }
        })
        .catch((err) => {
            console.error(err);
            alert('Could not add item!');
        });
}

const mappedOrder = [];
function render(orderItems){
    for(let i = 0; i < orderItems.selectedItemList.length; i++){
        mappedOrder.push(<div className="order-item" key={orderItems.selectedItemList[i].menuItemId} data-menuitemid={orderItems.selectedItemList[i].menuItemId}>
        <p className="order-item-name"><b>{orderItems.selectedItemList[i].name}</b></p>
        <div className="quantity-order-modal">
        <p>Quantity: </p><span className="quantity-order-item">{orderItems.selectedItemList[i].quantity}</span> <i className="fa-solid fa-circle-minus" onClick={decrementQuantity}></i><i className="fa-solid fa-circle-plus" onClick={incrementQuantity}></i>
        </div>
        
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
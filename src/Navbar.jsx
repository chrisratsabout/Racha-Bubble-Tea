import React, { useEffect } from "react";
import { useState } from "react";
import ViewOrderModal from "./ViewOrderModal";

const modalStateFromLocalStorage = JSON.parse(localStorage.getItem("modal")) || false;

export default function Navbar() {

const [isActive, setActive] = useState(modalStateFromLocalStorage)
const [order, setOrder] = useState([])
const [subtotal, setSubtotal] = useState(null)
const [taxAmount, setTaxAmount] = useState(null)
const [total, setTotal] = useState(null)
const [deleteItemId, setDeleteItemId] = useState("")


const handleClick = () => {
    setActive(true)
}

function loadOrder() {
    fetch("http://localhost:8080/order")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        setOrder(data.selectedItemList)
        render(data)
        mapOrder(data)
    })
}

useEffect(() => {loadOrder()}, [])

function incrementQuantity(e){
    let quantity = 1;
    let menuItemId = parseInt(e.target.parentElement.parentElement.dataset.menuitemid);
    const newOrder = { menuItemId, quantity };

    fetch("http://localhost:8080/order/items", {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOrder)

    })
        .then(async (response) => {
            if (response.ok) {
                let orderItem = await response.json()
                console.log(orderItem)
                mappedOrder = mappedOrder.filter(item => {
                    item.orderItemId !== orderItem.orderItemId
                })
                mappedOrder.push(orderItem);
                // alert('Quantity changed!');
                location.reload();
            }
        })
        .catch((err) => {
            console.error(err);
            alert('Quantity could not be changed!');
        });
}

function decrementQuantity(e){
    let currentQuantity = parseInt(e.target.parentElement.children[1].textContent);
    let orderItemId = parseInt(e.target.parentElement.parentElement.children[3].dataset.id);
    if(currentQuantity == 1){

        fetch("http://localhost:8080/order/" + orderItemId, {
            method: 'DELETE',
        })
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                console.log(data);
                // alert('Item removed!');
                location.reload();
            })
            .catch((err) => {
                console.error(err);
                alert('Could not delete order item!');
            });
    } else {
        let quantity = -1;
        let menuItemId = parseInt(e.target.parentElement.parentElement.dataset.menuitemid);
        const newOrder = { menuItemId, quantity };
    
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
                    // alert('Quantity changed!');
                    location.reload();
                
                }
            })
            .catch((err) => {
                console.error(err);
                alert('Quantity could not be changed!');
            });
    }

}

let mappedOrder = [];
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
            location.reload();
        })
        .catch((err) => {
            console.error(err);
            alert('Could not delete order item!');
        });
}

useEffect(() => {
    localStorage.setItem("modal", JSON.stringify(isActive));
})

    return (
        <>
            <nav className="navbar">
                <a href="https://chrisratsabout.github.io/racha/" className="nav-branding"><img src="images/racha-logo.png" alt="nav-logo" className="nav-logo" /></a>
                <a className="nav-text" href="https://chrisratsabout.github.io/racha/"><h1>Racha Boba Tea and Desserts</h1></a>
                <button className="new-view-order-btn" onClick={handleClick}><i className="fa-solid fa-cart-shopping"></i></button>
            </nav>
            {(order && isActive) && 
            <ViewOrderModal 
            closeViewOrderModal={setActive} 
            order={order} 
            subtotal={subtotal} 
            taxAmount={taxAmount} 
            total={total}
            deleteItem={deleteItem}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}/>}
        </>
    )
}
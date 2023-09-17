import React from "react";
import { useState } from "react";


export default function AddToOrderModal( {closeAddToOrderModal, selectedItem, selectedMenuItemId}) {
const [quantity, setQuantity] = useState(0);
const [menuItemId, setMenuItemId] = useState(selectedMenuItemId);

const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = { menuItemId, quantity };

    if(quantity > 0){
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
                    alert('Item added!');
                    location.reload();
                }
            })
            .catch((err) => {
                console.error(err);
                alert('Could not add item!');
            });
    }

}

function addCountHandler(){
    setQuantity(quantity + 1)
}

function minusCountHandler(){
    if(quantity <= 0){
        return;
    }
    setQuantity(quantity - 1)
}
    return (
        <>
            <div className="add-to-order-modal">
                <form onSubmit={handleSubmit} className="add-to-order-form">
                    <i className="fa-solid fa-x close-modal-btn" onClick={()=> closeAddToOrderModal(false)}></i>
                    <p>Selected Item:</p>
                    <h4 className="selected-item-name" data-menuitemid={selectedMenuItemId} >{selectedItem}</h4>
                    <label htmlFor="quantity" >Quantity: </label>
                    <div className="quantity-container">
                    <i className="fa-solid fa-circle-minus"  onClick={minusCountHandler}></i>
                    <p style={{fontSize:20}}>{quantity}</p>
                    <i className="fa-solid fa-circle-plus" onClick={addCountHandler}></i>
                    </div>
                        <button className="add-to-order-btn">Add To Order</button>
                </form>
            </div>
        </>
    )
}
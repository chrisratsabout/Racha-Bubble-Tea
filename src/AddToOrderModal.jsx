import React from "react";
import { useState } from "react";

export default function AddToOrderModal( {closeAddToOrderModal, selectedItem, selectedMenuItemId}) {
const [quantity, setQuantity] = useState('');
const [menuItemId, setMenuItemId] = useState(selectedMenuItemId);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quantity)
    console.log(menuItemId)
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
    return (
        <>
            <div className="add-to-order-modal">
                <form onSubmit={handleSubmit} className="add-to-order-form">
                    <i className="fa-solid fa-x close-modal-btn" onClick={()=> closeAddToOrderModal(false)}></i>
                    <p>Selected Item:</p>
                    <h4 className="selected-item-name" data-menuitemid={selectedMenuItemId} >{selectedItem}</h4>
                    <label for="quantity" >Quantity: </label>
                    <input type="number" id="quantity" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
                        <button className="add-to-order-btn">Add To Order</button>
                </form>
            </div>
        </>
    )
}
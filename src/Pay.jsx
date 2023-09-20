import React, { useEffect } from 'react'
import { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import axios from 'axios'
import Footer from './Footer'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Pay = () => {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    const [data, setData] = useState([])
    const [selectedItems, setSelectedItems] = useState([])
    const shoppingCartIcon = document.querySelector(".new-view-order-btn")

    useEffect(() => {
        axios.get('http://localhost:8080/order')
            .then(res => {
                setSelectedItems(res.data.selectedItemList)  
                setData(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const order = selectedItems.map((item, index) => {
        return (
            <div className="pay-order-item" key={item.orderItemId}>
                <p className='pay-order-item-name'>{index + 1}. {item.name}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Qty: {item.quantity}</p>
            </div>
        )
    })

    function goBackToMenu() {
        shoppingCartIcon.classList.remove("hide")
    }
        
    

    return (
        <>

            <div className="payment-container">
                <div className="order-container">
                    <h1>My Order:</h1>
                    {order}
                    <hr></hr>
                    <p>Subtotal: ${parseFloat(data.subtotal).toFixed(2)}</p>
                    <p>Tax: ${parseFloat(data.taxAmount).toFixed(2)}</p>
                    <strong>Total: ${parseFloat(data.total).toFixed(2)}</strong>
                    <Link to="/menu" onClick={goBackToMenu}><p className='back-to-menu'>Back To Menu</p></Link>
                   
                </div>
                <div className="credit-card-container">
                    <Cards
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focus}
                    />
                    <form action="">
                        <input
                            type="tel"
                            name="number"
                            placeholder='Card Number'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            onFocus={(e) => setFocus(e.target.name)}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder='Card Holder Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onFocus={(e) => setFocus(e.target.name)}
                        />
                        <input
                            type="text"
                            name="expiry"
                            placeholder='MM/YY Expiry'
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            onFocus={(e) => setFocus(e.target.name)}
                        />
                        <input
                            type="tel"
                            name="cvc"
                            placeholder='CVC'
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            onFocus={(e) => setFocus(e.target.name)}
                        />

                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Pay
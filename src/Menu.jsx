import React from "react";
import { useState } from "react";
import AddToOrderModal from "./AddToOrderModal";

export default function Menu() {
    const [isActive, setActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState("")
    const [selectedMenuItemId, setSelectedMenuItemId] = useState("")

    function handleClick(e) {
        setActive(true)
        setSelectedItem(e.target.parentElement.children[0].textContent)
        setSelectedMenuItemId(e.target.dataset.menuitemid)
    }

    const milkTeaItems = [
        {
            "menuItemId": 1,
            "name": "Hokkaido Milk Tea",
            "description": "Black milk tea w/toffee flavor + pearls",
            "price": 5.75
        },
        {
            "menuItemId": 2,
            "name": "Lavender Earl Grey Milk Tea",
            "description": null,
            "price": 5.75
        },
        {
            "menuItemId": 3,
            "name": "Cookies n Cream",
            "description": null,
            "price": 6
        },
        {
            "menuItemId": 4,
            "name": "Fresh Taro Milk Tea",
            "description": null,
            "price": 5.75
        },
        {
            "menuItemId": 5,
            "name": "Pandan Mungbean Milk Tea",
            "description": null,
            "price": 5.5
        },
        {
            "menuItemId": 6,
            "name": "Thai Tea",
            "description": null,
            "price": 4.5
        },
        {
            "menuItemId": 7,
            "name": "Green Thai Tea",
            "description": null,
            "price": 4.5
        },
        {
            "menuItemId": 8,
            "name": "Strawberry Matcha Latte",
            "description": null,
            "price": 6.25
        }
    ]

    const milkTeaList = milkTeaItems.map((milkTea) => {
        return <div className="menu-item" key={milkTea.menuItemId}>
            <p className="item-name"><b>{milkTea.name}</b><i onClick={handleClick} className="fa-solid fa-plus milk-tea" data-menuitemid={milkTea.menuItemId}></i></p>
            <p>${milkTea.price.toFixed(2)}</p>
        </div>
    })

    const fruitTeaItems = [
        {
            "menuItemId": 9,
            "name": "Love Triangle",
            "description": "Strawberry, mango, and passion fruit green tea with mango jelly",
            "price": 5.75
        },
        {
            "menuItemId": 10,
            "name": "Just Peachy",
            "description": "White peach oolong tea w/lychee jelly",
            "price": 5.75
        },
        {
            "menuItemId": 11,
            "name": "Fruitea Peebles",
            "description": "Orange and pineapple black tea with mango jelly",
            "price": 5.75
        },
        {
            "menuItemId": 12,
            "name": "Fruitea Way",
            "description": "Strawberry tea w/seasonal cut up fruit",
            "price": 6.25
        }
    ]

    const fruitTeaList = fruitTeaItems.map((fruitTea) => {
        return <div className="menu-item" key={fruitTea.menuItemId}>
            <p className="item-name"><b>{fruitTea.name}</b><i onClick={handleClick} className="fa-solid fa-plus milk-tea" data-menuitemid={fruitTea.menuItemId}></i></p>
            <p className="description-text">{fruitTea.description}</p>
            <p>${fruitTea.price.toFixed(2)}</p>
        </div>
    })

    const carbonatedDrinks = [
        {
            "menuItemId": 13,
            "name": "Off To Neverland",
            "description": "Butterfly pea tea sparkling virgin mojito w/lime slices and mint",
            "price": 5.25
        },
        {
            "menuItemId": 14,
            "name": "Your Spark",
            "description": "Probiotic yogurt w/sparkling water + choice of flavor -peach, orange, mango, passion fruit, strawberry, or lychee",
            "price": 5.5
        },
        {
            "menuItemId": 15,
            "name": "Sweet N Salty",
            "description": "Sparkling Vietnamese salted plum lemonade",
            "price": 5
        }
    ]

    const carbonatedDrinksList = carbonatedDrinks.map((carbonatedDrink) => {
        return <div className="menu-item" key={carbonatedDrink.menuItemId}>
            <p className="item-name"><b>{carbonatedDrink.name}</b><i onClick={handleClick} className="fa-solid fa-plus milk-tea" data-menuitemid={carbonatedDrink.menuItemId}></i></p>
            <p className="description-text">{carbonatedDrink.description}</p>
            <p>${carbonatedDrink.price.toFixed(2)}</p>
        </div>
    })

    const coffeeItems = [
        {
            "menuItemId": 16,
            "name": "Fifty/Fifty",
            "description": "Half black tea and half Vietnamese coffee",
            "price": 5
        },
        {
            "menuItemId": 17,
            "name": "Vietnamese Iced Coffee",
            "description": "Robusta coffee w/condensed milk",
            "price": 4.5
        },
        {
            "menuItemId": 18,
            "name": "Coconut Coffee",
            "description": "Robusta coffee w/condensed milk + coconut milk/cream",
            "price": 5.25
        }
    ]

    const coffeeItemsList = coffeeItems.map((coffeeItem) => {
        return <div className="menu-item" key={coffeeItem.menuItemId}>
            <p className="item-name"><b>{coffeeItem.name}</b><i onClick={handleClick} className="fa-solid fa-plus milk-tea" data-menuitemid={coffeeItem.menuItemId} ></i></p>
            <p className="description-text">{coffeeItem.description}</p>
            <p>${coffeeItem.price.toFixed(2)}</p>
        </div>
    })

    const banhMiItems = [
        {
            "menuItemId": 19,
            "name": "Bánh Mì đặc biệt",
            "description": "Bbq pork, headcheese, pork bologna, and pate",
            "price": 6.5
        },
        {
            "menuItemId": 20,
            "name": "Bánh Mì Thịt Nướng",
            "description": "Choice one one: chicken, beef, pork",
            "price": 6
        },
        {
            "menuItemId": 21,
            "name": "Bánh Mì Bi",
            "description": "Shredded pork",
            "price": 5.5
        },
        {
            "menuItemId": 22,
            "name": "Bánh Mì Cha Lua Pate",
            "description": "Pork bologna, and pate",
            "price": 6
        },
        {
            "menuItemId": 23,
            "name": "Bánh Mì Xiu Mai",
            "description": "Pork meatballs w/cucumber + green onions",
            "price": 6
        },
        {
            "menuItemId": 24,
            "name": "Bánh Mì Chay",
            "description": "Bbq bean curd",
            "price": 6
        }
    ]

    const banhMiList = banhMiItems.map((banhMiItem) => {
        return <div className="menu-item" key={banhMiItem.menuItemId}>
            <p className="item-name"><b>{banhMiItem.name}</b><i onClick={handleClick} className="fa-solid fa-plus milk-tea" data-menuitemid={banhMiItem.menuItemId} key={banhMiItem.menuItemId}></i></p>
            <p className="description-text">{banhMiItem.description}</p>
            <p>${banhMiItem.price.toFixed(2)}</p>
        </div>
    })

    return (
        <>
            <div className="top-container">
                <h2>Menu</h2>
                <p>Click<i className="fa-solid fa-plus"></i> to add an item to your order.</p>
            </div>
            <div className="menu-container">
                <div className="milk-tea-container">
                    <h2>Milk Tea</h2>
                    <div className="milk-tea-section">
                        {milkTeaList}
                    </div>
                </div>

                <div className="fruit-tea-container">
                    <h2>Fruit Tea</h2>
                    <div className="fruit-tea-section">
                        {fruitTeaList}
                    </div>
                </div>

                <div className="carbonated-drinks-container">
                    <h2>Carbonated Drinks</h2>
                    <div className="carbonated-drinks-section">
                        {carbonatedDrinksList}
                    </div>
                </div>

                <div className="coffee-container">
                    <h2>Coffee</h2>
                    <div className="coffee-section">
                        {coffeeItemsList}
                    </div>
                </div>

                <div className="banh-mi-container">
                    <h2>Bánh mì</h2>
                    <div className="banh-mi-section">
                        {banhMiList}
                    </div>
                </div>

            </div>
            {isActive && <AddToOrderModal closeAddToOrderModal={setActive} selectedItem={selectedItem} selectedMenuItemId={selectedMenuItemId} />}
        </>
    )
}
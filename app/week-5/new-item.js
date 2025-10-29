"use client";

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault()

        const item = {
            quantity: quantity,
            name: name,
            category: category
        };

        console.log(item);

        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setQuantity(1);
        setName("");
        setCategory("Produce");
    }
 
    const increment = () => {
        if(quantity < 20) {
            setQuantity(quantity + 1);
        } 
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    let buttonStyleInc = "bg-green-700 rounded p-2 mr-2 cursor-pointer";
    if(quantity >= 20) {
        buttonStyleInc = "bg-gray-700 rounded p-2 mr-2"
    }

    let buttonStyleDec = "bg-red-700 rounded p-2 cursor-pointer";
    if(quantity <= 1) {
        buttonStyleDec = "bg-gray-700 rounded p-2"
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-6 rounded-2xl">
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter item name"
                        className="w-full p-2 rounded bg-gray-100 text-black"
                    />
                </div>
                <div className="text-center">
                    <p className="mb-2 font-medium">
                        Current Quantity: <span className="font-bold">{quantity}</span>
                    </p>
                    <div className="flex justify-center gap-3">
                        <button type="button" onClick={decrement} className={buttonStyleDec}>
                            Decrease
                        </button>
                        <button type="button" onClick={increment} className={buttonStyleInc}>
                            Increase
                        </button>
                    </div>
                </div>
                <div>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 rounded bg-gray-100 text-black mt-2">
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4 rounded-2xl">
                    Add
                </button>
            </form>
        </main>
        
    );
}
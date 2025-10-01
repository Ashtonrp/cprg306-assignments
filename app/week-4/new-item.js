"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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
            <p className="bg-black rounded mb-2 text-center">Current Quantity: {quantity}</p>
            <button onClick={increment} className={buttonStyleInc}>Increase</button>
            <button onClick={decrement} className={buttonStyleDec}>Decrease</button>
        </main>
    );
}
"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {

    const [sortBy, setSortBy] = useState("name");

    const handleSortClick = (value) => setSortBy(value);

    // Always work on a copy of the items prop
    let itemArray = [...items].map(item => ({ ...item }));

    // Sorting the copied array—not the prop
    if (sortBy !== "none") {
        itemArray.sort((itemA, itemB) => {
            let valA = itemA[sortBy].toUpperCase();
            let valB = itemB[sortBy].toUpperCase();

            if (valA < valB) return -1;
            if (valA > valB) return 1;
            return 0;
        });
    }

    const buttonStyling = 
        "text-center ml-4 rounded cursor-pointer transition-colors px-3 py-2";

    return (
        <section className="text-white">

            <div className="mb-4 flex justify-center">

                <button
                    className={
                        sortBy === "name"
                            ? `${buttonStyling} bg-orange-600 text-white`
                            : `${buttonStyling} bg-neutral-700 text-white hover:bg-neutral-600`
                    }
                    onClick={() => handleSortClick("name")}
                >
                    Name
                </button>

                <button
                    className={
                        sortBy === "category"
                            ? `${buttonStyling} bg-orange-600 text-white`
                            : `${buttonStyling} bg-neutral-700 text-white hover:bg-neutral-600`
                    }
                    onClick={() => handleSortClick("category")}
                >
                    Category
                </button>

            </div>

            <ul>
                {itemArray.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>

        </section>
    );
}

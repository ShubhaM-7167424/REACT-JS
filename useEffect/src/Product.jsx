import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";

const Product = () => {
    let [name, setName] = useState("Iphone 15");
    let [price, setPrice] = useState(100000);

    // 1. ByDefault useEffect is called for every render and re-render
    // 2. if you pass second parameter as a blank array, then useEffect is called
    //  only for first render
    // 3. if you pass second parameter as a array of some variable, then useEffect
    // is called for first render + whenver the variable is updated
    // 4. When the component unmount the return function of useffect is getting called
    // 5. You can have multiple useEffect in a single Component

    useEffect(() => {
        console.log("Component Mounted");

        return () => {
            console.log("Component Gone");
        };
    }, [price]);

    return (
        <div className="product">
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button
                onClick={() => {
                    setName("Samsung S23");
                }}
            >
                Change Name
            </button>
            <button
                onClick={() => {
                    setPrice(140000);
                }}
            >
                Change Price
            </button>
        </div>
    );
};

export default Product;

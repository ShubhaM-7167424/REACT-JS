import React, { useEffect, useState } from "react";

const Product = () => {
    const [name, setName] = useState("Samsung M23");
    const [price, setPrice] = useState(40000);

    useEffect(() => {
        console.log("useEffect called");
        
        return () => {
            console.log("Component UnMounted");
        };
    }, [price]);

    return (
        <div className="product">
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button
                onClick={() => {
                    setName("Iphone 15");
                }}
            >
                change Name
            </button>
            <button onClick={() => setPrice(70000)}>change Price</button>
        </div>
    );
};

export default Product;

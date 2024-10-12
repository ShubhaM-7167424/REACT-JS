import React, { useEffect, useState } from "react";

const Product = () => {
    const [name, setName] = useState("Samsung M23");
    const [price, setPrice] = useState(40000);

    useEffect(() => {
        console.log("useEffect called");
        
        // 1. By default useffect is called for every render and re-render
        // 2. If you pass a second param as a blank array it will be only called for first render
        // 3. If you pass variables in dependecy array - use effect will still be called for the first render
        //    but now it  will also be called if the value of  that variable changes changes in the dependecy array
        // 4. You can have multiple useffect in a single component

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

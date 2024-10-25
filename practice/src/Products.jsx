import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const Products = () => {
    let [products, setproducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setproducts(data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="products">
            {products.map((product) => {
                return (
                    <div className="product" key={product.id}>
                        <div className="img-wrapper">
                            <img className="image" src={product.image} alt="img" />
                        </div>
                        <h2 className="title">{product.title}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default Products;

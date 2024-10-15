import React, { useEffect, useState } from "react";

const Products = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((err) => console.log(err));
    });

    return (
        <div className="products">
            {products.map((product) => {
                return (
                    <div className="product" key={product.id}>
                        <div className="img-wrapper">
                            <img className="img" src={product.image} alt="img" />
                        </div>
                        <h2 className="title">{product.title}</h2>
                        <h2 className="price">{product.price}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default Products;

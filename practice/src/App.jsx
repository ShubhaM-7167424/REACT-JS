import { useState } from "react";
import "./App.css";
import Product from "./Product";

function App() {
    let [showProduct, setShowProduct] = useState(true);

    return (
        <>
            <h1>UseEffect Demo</h1>

            <button onClick={()=> {setShowProduct(true)}}>Show</button>
            <button onClick={()=> {setShowProduct(false)}}>Hide</button>


            {showProduct === true ? <Product /> : <h1>Product Not Found</h1>}
        </>
    );
}

export default App;
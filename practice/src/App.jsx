import "./App.css";
import Product from "./Product";


function App() {
    return (
        <>
            <Product name='Iphone 15'  price= {150000} specs={{ram: '4gb', color: 'Gold'}} category= {['mobile', 'electronics']} />
            <Product name='Samsung S4'  price= {50000} specs={{ram: '6gb', color: 'Blue'}} category= {['mobile', 'electronics']} />
        </>
    );
}

export default App;

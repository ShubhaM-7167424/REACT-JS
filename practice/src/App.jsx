import { useState } from "react";
import "./App.css";
import Country from "./Country";
import Product from "./Product";
import User from "./User";

function App() {
    let [countries, setCountries] = useState([
        { name: "Nepal", capital: "kathmandu", population: "230M" },
        { name: "India", capital: "Delhi", population: "1B" },
        { name: "USA", capital: "Washington DC", population: "600M" },
    ]);

    function loadNewCountries() {
        setCountries([
            { name: "Germany", capital: "Berlin", population: "90M" },
            { name: "China", capital: "Beijing", population: "1.4B" },
            { name: "Japan", capital: "Tokyo", population: "126M" },
        ]);
    }

    return (
        <>
        <button onClick={loadNewCountries}>Load New Countries</button>

            {
                countries.map((country)=>{
                    return (
                        <Country name={country.name} capital={country.capital} population={country.population} />
                    )
                })
   
            }

        </>
    );
}

export default App;

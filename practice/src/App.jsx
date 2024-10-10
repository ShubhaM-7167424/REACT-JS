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

    return (
        <>
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

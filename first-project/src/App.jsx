import { useState } from "react";
import "./App.css";
import Country from "./Country";

function App() {

    let [isLoggedIn, setIsLoggedIn] = useState(true);

    let [countries, setCountries] = useState([
        { name: "Nepal", capital: "kathmandu", population: "230M" },
        { name: "India", capital: "Delhi", population: "1B" },
        { name: "USA", capital: "Washington DC", population: "600M" },
    ]);

    function loadNewCountries() {
        setCountries([
            { name: "Germany", capital: "Berlin", population: "90M" },
            { name: "France", capital: "Paris", population: "70M" },
            { name: "Japan", capital: "Tokyo", population: "130M" },
        ]);
    }

    return (
        <div>

            <h1>Components</h1>
            <h2>{isLoggedIn ? "Logged In" : "Logged Out"}</h2>
            <button onClick={loadNewCountries}>Load New Countries</button>

            {countries.map((country) => {
                return <Country name={country.name} capital={country.capital} population={country.population} />;
            })}

        </div>
    );
}

export default App;

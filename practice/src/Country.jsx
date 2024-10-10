import React from "react";

const Country = (props) => {
    return (
        <div className="country">
            <h2>{props.name}</h2>
            <h2>{props.capital}</h2>
            <h2>{props.population}</h2>
        </div>
    );
};

export default Country;

import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Track = () => {
    const loggedData = useContext(UserContext);

    const [foodItems, setFoodItems] = useState([]);

    function searchFood(event) {
        if (event.target.value !== "") {
            fetch(`http://localhost:8000/foods/${event.target.value}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${loggedData.loggedUser.token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.message === undefined) {
                        setFoodItems(data);
                    }
                    else{
                        setFoodItems([])
                    }
                })
                .catch((error) => console.error(error));
        } else {
            setFoodItems([]);
        }
    }

    return (
        <div className="container track-container">
            <div className="search">
                <input
                    className="search-inp"
                    onChange={searchFood}
                    type="search"
                    placeholder="Search Food Item"
                />

                <div className="search-results">
                    {foodItems.map((item) => {
                        return (
                            <p className="item" key={item._id}>
                                {item.name}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Track;

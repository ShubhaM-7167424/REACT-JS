import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import Food from "./Food";

const Track = () => {
    const loggedData = useContext(UserContext);

    const [foodItems, setFoodItems] = useState([]);
    const [food, setFood] = useState(null);

    useEffect(() => {
        console.log(food);
    });

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
                    console.log(data);

                    if (data.message === undefined) {
                        setFoodItems(data);
                    } else {
                        setFoodItems([]);
                    }
                })
                .catch((error) => console.error(error));
        } else {
            setFoodItems([]);
        }
    }

    return (
        <section className="container track-container">
            <div className="search">
                <input
                    className="search-inp"
                    onChange={searchFood}
                    type="search"
                    placeholder="Search Food Item"
                    
                />

                {foodItems.length !== 0 ? (
                    <div className="search-results">
                        {foodItems.map((item) => {
                            return (
                                <p
                                    className="item"
                                    key={item._id}
                                    onClick={() => {
                                        setFood(item);
                                    }}
                                >
                                    {item.name}
                                </p>
                            );
                        })}
                    </div>
                ) : null}
            </div>

            {food !== null ? <Food food={food} /> : null}
        </section>
    );
};

export default Track;

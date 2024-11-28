import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Header from "./Header";

const Diet = () => {
    let loggedData = useContext(UserContext);
    const [items, setItems] = useState([]);
    const [date, setDate] = useState(new Date());

    const [total, setTotal] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/track/${loggedData.loggedUser.userid}/${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + loggedData.loggedUser.token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setItems(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [date]);

    useEffect(() => {
        calculateTotal();
    }, [items]);

    function calculateTotal() {
      let totalCopy = {
        totalCalories: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFat: 0,
        totalFiber: 0,
      };

        items.forEach((item) => {
            totalCopy.totalCalories += item.details.calories;
            totalCopy.totalProtein += item.details.protein;
            totalCopy.totalCarbs += item.details.carbohydrates;
            totalCopy.totalFat += item.details.fat;
            totalCopy.totalFiber += item.details.fiber;
        });

        setTotal(totalCopy);
    }

    return (
        <div className="container diet-container">

            <Header/>

            <input type="date" onChange={(e) => {
                setDate(new Date(e.target.value));
            }} />

            {items.map((item) => {
                return (
                    <div className="item" key={item._id}>
                        <h3>
                            {item.foodId.name} ({item.details.calories}Kcal for {item.quantity}gm)
                        </h3>
                        <p>Protein: {item.details.protein}g</p>
                        <p>Carbs: {item.details.carbohydrates}g</p>
                        <p>Fat: {item.details.fat}g</p>
                        <p>Fiber: {item.details.fiber}g</p>
                    </div>
                );
            })}

            <div className="item">
                <h2>Total Calories: {total.totalCalories}Kcal </h2>
                <p>Protein: {total.totalProtein}g</p>
                <p>Carbs: {total.totalCarbs}g</p>
                <p>Fat: {total.totalFat}g</p>
                <p>Fiber: {total.totalFiber}g</p>
            </div>
        </div>
    );
};

export default Diet;

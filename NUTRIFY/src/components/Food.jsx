import React, { useEffect } from "react";
import { useState } from "react";

const Food = (props) => {
    const [eatenQuantity, setEatenQuantity] = useState(100);
    const [food, setFood] = useState({});
    const [foodInitial, setFoodInitial] = useState(props.food);

    useEffect(() => {
        setFood(props.food);
    }, [props.food]);

    function calculateMacros(event) {
        if (event.target.value.length !== 0) {
            let quantity = Number(event.target.value);
            setEatenQuantity(quantity);

            let copyFood = { ...food };

            copyFood.protein = (foodInitial.protein * quantity) / 100;
            copyFood.carbohydrates = (foodInitial.carbohydrates * quantity) / 100;
            copyFood.fat = (foodInitial.fat * quantity) / 100;
            copyFood.fiber = (foodInitial.fiber * quantity) / 100;
            copyFood.calories = (foodInitial.calories * quantity) / 100;

            setFood(copyFood);
        } else {
            setFood(foodInitial);
            setEatenQuantity(100);
        }
    }

    return (
        <div className="food">
            <div className="food-img">
                <img src={food.imageUrl} className="food-image" />
            </div>

            <h3>
                {food.name} ({food.calories}Cal for {eatenQuantity}Gm){" "}
            </h3>

            <div className="nutrient">
                <p className="n-title">Protein</p>
                <p className="n-value">{food.protein}g</p>
            </div>

            <div className="nutrient">
                <p className="n-title">Carbs</p>
                <p className="n-value">{food.carbohydrates}g</p>
            </div>

            <div className="nutrient">
                <p className="n-title">Fat</p>
                <p className="n-value">{food.fat}g</p>
            </div>

            <div className="nutrient">
                <p className="n-title">Fiber</p>
                <p className="n-value">{food.fiber}g</p>
            </div>

            <input
                type="number"
                className="inp"
                onChange={calculateMacros}
                placeholder="Quantity in Grams"
            />

            <button className="btn">track this food</button>
        </div>
    );
};

export default Food;

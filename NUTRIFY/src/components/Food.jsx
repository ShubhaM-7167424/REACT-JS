import React from 'react'
import { useState } from 'react'

const Food = (props) => {
      const {name, calories, protein, fat,  carbohydrates,fiber, imageUrl} = props.food
      const [grams, setGrams] = useState(100)
      
  return (
      <div className="food">
          <div className="food-img">
            <img src={imageUrl} className='food-image' />
          </div>

          <h3>{name} ({calories}Cal for {grams}Gm) </h3>

          <div className="nutrient">
              <p className="n-title">Protein</p>
              <p className="n-value">{protein}g</p>
          </div>

          <div className="nutrient">
              <p className="n-title">Carbs</p>
              <p className="n-value">{carbohydrates}g</p>
          </div>

          <div className="nutrient">
              <p className="n-title">Fat</p>
              <p className="n-value">{fat}g</p>
          </div>

          <div className="nutrient">
              <p className="n-title">Fiber</p>
              <p className="n-value">{fiber}g</p>
          </div>

          <input type="number" className="inp" placeholder="Quantity in Grams" />

          <button className="btn">track this food</button>
      </div>
  );
}

export default Food
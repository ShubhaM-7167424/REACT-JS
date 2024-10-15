import React from "react";
import { useState } from "react";

// Updating state with array and objects

const UpdateArray = () => {
    let [name, setName] = useState("Shubham");
    let [animals, setAnimals] = useState(["lion", "tiger", "hippo"]);

    function changeName() {
        setName((name)=>{          
            return 'Thor'+ name          
        })
    }

    function addAnimal() {
        setAnimals((animals)=>{          
          return [...animals , 'Cat']
        })
    }


    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Change Name</button>

            {
              animals.map((animal, index)=>{
                return (
                  <h1 key={index}>{animal}</h1>
                )
              })
            }
            <button onClick={addAnimal}>Add Animal</button>
        </div>
    );
};

export default UpdateArray;

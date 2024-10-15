import React, { useState } from "react";

const Form = () => {
    let [details, setDetails] = useState({
        name:'',
        email:''
    });


    function handleInput(event) {
        setDetails((prevObj) => {
            return { ...prevObj, [event.target.name]: event.target.value };
        });
    }
    function handleSubmit() {
        console.log(details);        
    }

    // if someone changes the value of state variable from somewhere else , it will be reflected in our input
    // if we use 2way binding as  value={details.name} 
    return (
        <div className="form">
            <input onChange={handleInput} name="name" type="text" placeholder="Enter your name" value={details.name} />
            <input onChange={handleInput} name="email" type="email" placeholder="Enter your email" value={details.email} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Form;

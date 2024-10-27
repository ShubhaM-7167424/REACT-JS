import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

      let [userDetails, setUserDetails] = useState({
            name: "",
            email: "",
            password: "",
            age: ""
      })

      function handleInput(event) {
            setUserDetails((prevState) => {
                  return { ...prevState, [event.target.name]: event.target.value }
            })            
      }

      function handleSubmit(event){
            event.preventDefault();
            console.log(userDetails);
            
      }
            
      
    return (
        <div>
            <section className="container">
                <form className="form" onSubmit={handleSubmit}>
                  
                    <h1>Start Your Fitness</h1>
                    <input className="inp" onChange={handleInput} type="text"
                     placeholder="Enter  Name"  name="name" required value={userDetails.name} />

                    <input className="inp" onChange={handleInput} type="email"
                     placeholder="Enter  Email"  name="email" required value={userDetails.email} />

                    <input className="inp" onChange={handleInput} type="password"
                     placeholder="Enter  Password"  name="password" required value={userDetails.password} />

                    <input className="inp" onChange={handleInput} type="number"
                     placeholder="Enter  Age"  name="age" required value={userDetails.age} />

                    <button className="btn">Join</button>
                    <p>
                        Already Registered ? <Link to={'/login'} > Login</Link>
                    </p>

                </form>

               
            </section>
        </div>
    );
};

export default Register;

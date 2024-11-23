import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

      let [userDetails, setUserDetails] = useState({
            name: "",
            email: "",
            password: "",
            age: ""
      })

      let [message, setMessage] = useState({
          type: "invisible-msg",
          text: "Dummy Msg",
      });

      function handleInput(event) {
            setUserDetails((prevState) => {
                  return { ...prevState, [event.target.name]: event.target.value }
            })            
      }

      function handleSubmit(event){
            event.preventDefault();
            console.log(userDetails);
            
            fetch("http://localhost:8000/register", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(userDetails)
            })
            .then((response) => response.json())
            .then((data) => {
                  console.log(data);
                  setMessage({type: 'success', text: data.message})
                  setUserDetails({name: "", email: "", password: "", age: ""})

                  setTimeout(() => {
                        setMessage({type: 'invisible-msg', text: 'Dummy Msg'})
                  }, 5000);
                  
            }) 
            .catch((error) => console.error(error));            
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
                     placeholder="Enter  Password"  name="password" maxLength={8} required value={userDetails.password} />

                    <input className="inp" onChange={handleInput} type="number"
                     placeholder="Enter  Age"  name="age" min={12} max={100} required value={userDetails.age} />

                    <button className="btn">Join</button>
                    <p>
                        Already Registered ? <Link to={'/login'} > Login</Link>
                    </p>

                    <p className={message.type}>{message.text}</p>

                </form>
               
            </section>
        </div>
    );
};

export default Register;

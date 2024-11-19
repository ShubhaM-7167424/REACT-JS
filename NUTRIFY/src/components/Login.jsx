import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Login = () => {

    const loggedData = useContext(UserContext)
        
    const navigate = useNavigate();

    const [userCreds, setUserCreds] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState({
        type: "invisible-msg",
        text: "Dummy text",
    });

    function handleInput(event) {
        setUserCreds((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
        })
            .then((response) => {
                if (response.status === 404) {
                    setMessage({ type: "error", text: "User or Email Doesnot Exist" });
                } else if (response.status === 403) {
                    setMessage({ type: "error", text: "Wrong Password" });
                }

                setTimeout(() => {
                    setMessage({ type: "invisible-msg", text: "Dummy text" });
                }, 3000);

                return response.json();
            })
            .then((data) => {
                if (data.token !== undefined) {
                    //* we are storing the data in localstorage so that if we close our applications and open it after 20 mins we are still be logged in.
                    localStorage.setItem("nutrify-user", JSON.stringify(data));
                    //* we are storing the data in the context variable so , we can access that data in any of the component.
                    loggedData.setLoggedUser(data);

                    navigate("/track");
                }
            })
            .catch((error) => console.error(error));
    }

    return (
        <div>
            <section className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Join To Fitness</h1>

                    <input className="inp" type="email" onChange={handleInput} required placeholder="Enter  Email" name="email" value={userCreds.email} />

                    <input className="inp" type="password" onChange={handleInput} maxLength={8} placeholder="Enter  Password" name="password" value={userCreds.password} />

                    <button className="btn">Login</button>
                    <p>
                        Don't have an account ? <Link to={"/register"}> Register Now</Link>
                    </p>

                    <p className={message.type}>{message.text}</p>
                </form>
            </section>
        </div>
    );
};

export default Login;

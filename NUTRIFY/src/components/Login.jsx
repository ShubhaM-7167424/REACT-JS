import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <section className="container">
                <form className="form">
                    <h1>Join To Fitness</h1>
                    <input className="inp" type="email" placeholder="Enter  Email" name="email" />
                    <input className="inp" type="password" placeholder="Enter  Password" name="password" />
                    <button className="btn">Login</button>
                    <p>
                        Don't have an account ? <Link to={'/register'}> Register Now</Link>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default Login;

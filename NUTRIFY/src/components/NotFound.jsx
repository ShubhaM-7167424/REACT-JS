import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <section className="container">
                <div className="not-found">
                    <h1>404 Not Found</h1>
                    <p>
                        <Link to={'/register'}> Register</Link> Now to use
                    </p>
                </div>
            </section>
        </div>
    );
};

export default NotFound;

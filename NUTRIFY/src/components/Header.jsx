import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const loggedData = useContext(UserContext);
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("nutrify-user");
        loggedData.setLoggedUser(null);
        navigate("/login");
    }

    return (
        <div>
            <ul>
                <Link to={"/track"}>
                    <li>Track</li>
                </Link>

                <Link to={'/diet'}>
                    <li>Diet</li>
                </Link>
                <li onClick={logout} className="logout">Logout</li>
            </ul>
        </div>
    );
};

export default Header;

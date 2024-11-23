import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

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
                <li>Home</li>
                <li onClick={logout}>Logout</li>
            </ul>
        </div>
    );
};

export default Header;

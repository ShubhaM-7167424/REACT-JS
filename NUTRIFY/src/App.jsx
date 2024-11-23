import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Track from "./components/Track";
import "./App.css";
import { UserContext } from "./contexts/UserContext";
import Private from "./components/Private";
import { useEffect } from "react";

const App = () => {
    // creating a global state variable
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("nutrify-user")));

    return (
        <div>
            <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
                <BrowserRouter> 
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/track" element={<Private Component={Track} />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </div>
    );
};

export default App;

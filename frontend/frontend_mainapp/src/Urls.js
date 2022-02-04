import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";

function Urls(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home {...props} />} />
                    <Route exact path="/login" element={<Login {...props} />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Urls;
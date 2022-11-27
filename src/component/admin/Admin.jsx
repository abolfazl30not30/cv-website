import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";


function Admin() {

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center mainBody">
                <Routes>
                    <Route exact path="/" element={(<Login />)} />
                    <Route path="/dashboard" element={(<Dashboard />)} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin;
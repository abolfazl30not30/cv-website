import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import axios from "axios";

function Admin() {

    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8089/api/v1/admin/message', {headers: {'Authorization': localStorage.getItem('token')}}).then((response) => response.data)
            .then(() => {
                setIsAuth(true)
            }).catch(() => {
            setIsAuth(false)
        });
    });
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center mainBody">
                {
                    isAuth
                    ?
                        <Routes>
                            <Route exact path="/" element={(<Login />)} />
                            <Route path="/dashboard" element={(<Dashboard />)} />
                        </Routes>
                    :
                        <Routes>
                            <Route path="/*" element={(<Login />)} />
                        </Routes>
                }
            </div>
        </div>
    )
}

export default Admin;
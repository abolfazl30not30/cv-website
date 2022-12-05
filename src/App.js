import React, { Component } from 'react';
import {Route, Routes} from "react-router-dom";
import MainWebsite from "./component/MainWebsite";
import Admin from "./component/admin/Admin";
import 'bootstrap/dist/css/bootstrap.css';

function App(){

        return (
            <>
                <Routes>
                    <Route exact path="/*" element={(<MainWebsite />)} />
                    <Route path="/admin/*" element={(<Admin/>)} />
                </Routes>
            </>
        );
}

export default App;
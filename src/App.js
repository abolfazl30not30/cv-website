import React, { Component } from 'react';
import Navbar from './component/Navbar'
import Home from "./component/pages/Home";
import MainPage from "./component/mainPage";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function App(){
    const {t} = useTranslation();
        return (
            <>
                <div className="d-flex justify-content-center align-items-center mainBody">
                    <MainPage/>
                </div>
            </>
        );
}

export default App;
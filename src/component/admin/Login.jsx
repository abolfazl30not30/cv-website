import React, {useState, useEffect} from 'react';
import backSvg from "../../img/background.svg";


function Login() {

    return (
        <>
            <img src={backSvg} className="back-svg-1"/>
            <img src={backSvg} className="back-svg-2"/>
            <img src={backSvg} className="back-svg-3"/>
            <div className="main-container">
                Login
            </div>
        </>

    )
}

export default Login;
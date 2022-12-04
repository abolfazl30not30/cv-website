import React, {useState, useEffect} from 'react';
import backSvg from "../../img/background.svg";
import '../../style/loginPage.css'

function Login() {

    return (
        <>
            <img src={backSvg} className="back-svg-1"/>
            <img src={backSvg} className="back-svg-2"/>
            <img src={backSvg} className="back-svg-3"/>

            <div className="login-container">
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login">
                                <div className="login__field">
                                    <i className="login__icon fas fa-user"/>
                                    <input type="text" className="login__input" placeholder="Email"/>
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock"/>
                                    <input type="password" className="login__input" placeholder="Password"/>
                                </div>
                                <button className="button login__submit">
                                    <span className="button__text">Log In</span>
                                    <i className="button__icon fas fa-chevron-right"/>
                                </button>
                            </form>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"/>
                            <span className="screen__background__shape screen__background__shape3"/>
                            <span className="screen__background__shape screen__background__shape2"/>
                            <span className="screen__background__shape screen__background__shape1"/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login;
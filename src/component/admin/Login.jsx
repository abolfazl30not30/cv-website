import React, {useState, useRef} from 'react';
import backSvg from "../../img/background.svg";
import '../../style/loginPage.css'
import axios from "axios";

function Login() {
    const [loading, setLoading] = useState(false)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const handleLogin = () => {
        setLoading(true)
        axios.post(`http://localhost:8089/login`,null, {
            params: {
                "username": usernameRef.current.value,
                "password": passwordRef.current.value
            }},
            {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "http://localhost:8089",
            }
        })
            .then(response =>{
                    localStorage.setItem("token", response.headers["accesstoken"]);
                    setLoading(false)
                    window.location = "/admin/dashboard"
                }
            ).catch(err => {
            setLoading(false)
        })
    }

    return (
        <>
            <img src={backSvg} className="back-svg-1"/>
            <img src={backSvg} className="back-svg-2"/>
            <img src={backSvg} className="back-svg-3"/>

            <div className="login-container">
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <div className="login">
                                <div className="login__field">
                                    <i className="login__icon fas fa-user"/>
                                    <input ref={usernameRef} type="text" className="login__input" placeholder="Username"/>
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock"/>
                                    <input ref={passwordRef} type="password" className="login__input" placeholder="Password"/>
                                </div>
                                <button disabled={loading} onClick={() => handleLogin()} className="button login__submit">
                                    <span className="button__text">Log In</span>
                                    <i className="button__icon fas fa-chevron-right"/>
                                </button>
                            </div>
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
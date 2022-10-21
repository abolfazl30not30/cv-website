import React, { Component } from 'react';
import Navbar from './component/Navbar'
import Home from "./component/Home";
import MainPage from "./component/mainPage";

class App extends Component {
    state = {}

    render() {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center mainBody">
                    <MainPage/>
                </div>

            </>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Navbar from './component/Navbar'
import Home from "./component/Home";

class App extends Component {
    state = {}

    render() {
        return (
            <>
                <div>
                    <Navbar/>
                    <Home/>
                </div>
            </>
        );
    }
}

export default App;
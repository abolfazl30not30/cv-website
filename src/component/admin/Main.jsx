import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import EditArticles from "./editPages/editArticles";


class Main extends Component {
    render() {
        return (
            <>
                <div>
                    <Routes>
                        <Route path={'editArticles'} element={(<EditArticles />)}/>
                        {/*<Route />*/}
                        {/*<Route />*/}
                        {/*<Route />*/}
                    </Routes>
                </div>
            </>
        );
    }
}

export default Main;
import {Component} from "react";
import {NavLink} from 'react-router-dom';

function Setting () {
    return (
        <>
            <aside>
                <ul>
                    <li>
                        <NavLink to={"changeBG"}>
                            change background
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            change background
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            change background
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            change background
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Setting;
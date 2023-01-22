import React, {Component, useEffect, useState} from "react";
import axios from "axios";
import {IconButton} from "@mui/material";
import {IoClose} from "react-icons/io5";


function Messages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8089/api/v1/admin/message', {
            headers: {
                'Authorization': localStorage.getItem('token'),
                "Access-Control-Allow-Origin": "http://localhost:8089",
            },
        })
            .then(res => {
                setMessages(res.data);
                }
            )
    },[]);

    return (
        <>
            <div className={"w-100"}>
                <div className="page-title">
                    <h3>Messages</h3>
                </div>
                <br/>
                <br/>
                <div className="mx-3 d-flex flex-column" style={{overflowY: "scroll", height: window.innerHeight*0.75}}>
                    {
                        messages.map((message, key) => (
                            <div key={key}>
                                <div className="research mb-4 p-3" style={{borderRadius: "10px", backgroundColor: "#fff"}}>
                                    <div>
                                        <h5 style={{fontWeight:"bold"}}>{message.subject}</h5>
                                        <p>
                                            {message.fullName}
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                    <span>
                                         {message.date}
                                    </span>
                                        <h6>
                                            {message.textMessage}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Messages;
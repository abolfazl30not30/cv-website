import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import "../../../style/editPages.css"
// import '../../../style/home.css'
import {HiOutlineXMark} from "react-icons/hi2";
import {IconButton} from "@mui/material";
import {IoIosAddCircle} from "react-icons/io";
import {Button} from "@mui/material";
import {Modal} from "react-bootstrap"


function EditArticles () {
    const {t} = useTranslation();
    const [articles, setArticles] = useState([])
    const [showAddModal, setShowAddModal] = useState(false)

    useEffect  ( () => {

    let articleList = t('publication-list', {returnObjects: true})
        setArticles(articleList)

        // const getArticles = fetch('http://localhost:8089/api/v1/public/article').then((response) => response.json())
        //     .then((data) => setArticles(data));
    },[]);

    return (
        <>
            <div className={"w-100"}>
                <div className="page-title">
                    <h3>{t("articles")}</h3>
                </div>
                <div className="mt-5 mx-3" style={{overflowY: "scroll", height: window.innerHeight*0.80}}>
                    {
                        articles.map((p) => (
                            <div className="mb-4 section p-3" style={{borderRadius: "10px", backgroundColor: "#fff"}}>
                                <div className="d-flex align-items-center mb-2">
                                    <span>
                                        {p.year}
                                    </span>
                                    <h6>
                                        {p.description}
                                    </h6>
                                </div>
                                <div>
                                    <h5>{p.title}</h5>
                                    <p>
                                        {p.writer}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default EditArticles;
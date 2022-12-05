import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import "./../../../style/pages.css"
import '../../../style/home.css'
import {HiOutlineXMark} from "react-icons/hi2";
import {IconButton} from "@mui/material";


function EditArticles () {
    const {t} = useTranslation();
    const [publication, setPublication] = useState([])

    useEffect  ( () => {

    let publicationList = t('publication-list', {returnObjects: true})
        setPublication(publicationList)

    },[]);

    return (
        <>
            <div>
                <div className="main-title">
                    <h3>{t("articles")}</h3>
                </div>
                <div className="mt-5 mx-3">
                    {
                        publication.map((p) => (
                            <div className="research mb-4 d-flex">
                                <IconButton className={'justify-content-end'} sx={{outline: 'none'}}>
                                    <HiOutlineXMark />
                                </IconButton>
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
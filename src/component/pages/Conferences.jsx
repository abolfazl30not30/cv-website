import React, {useState, useEffect} from 'react';
import '../../style/home.css'
import {useTranslation} from 'react-i18next'
import "./../../style/pages.css"

function Conferences() {

    const {t} = useTranslation();
    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        let conferencesList = t('conferences-list', {returnObjects: true})
        setConferences(conferencesList)
    });
    return (
        <>
            <div>
                <div className="main-title">
                    <h3>{t("conferences")}</h3>
                </div>
                <div className="mt-5 mx-3">
                    {
                        conferences.map((p) => (
                            <div className="research mb-4">
                                <div className="d-flex align-items-center mb-2">
                                    <span style={{backgroundColor:"#007ced",color:"#fff"}}>
                                         {p.year}
                                    </span>
                                </div>
                                <div>
                                    <h5 style={{fontWeight:"bold"}}>{p.title}</h5>
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

export default Conferences;
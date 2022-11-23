import React, {useState, useEffect} from 'react';
import '../../style/home.css'
import {useTranslation} from 'react-i18next'


function Conferences() {

    const {t} = useTranslation();
    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        let conferencesList = t('conferences-list', {returnObjects: true})
        setConferences(conferencesList)
    });

    return (
        <div>
            <div className="main-title">
                <h3>{t("courses")}</h3>
            </div>
            <div className="mt-5">
            </div>
        </div>
    )
}

export default Conferences;
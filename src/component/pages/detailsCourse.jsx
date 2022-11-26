import React, {useState, useEffect} from 'react';
import '../../style/home.css'
import {useTranslation} from 'react-i18next'
import "../../style/card.scss"
import {Link} from "react-router-dom"
import img from "../../img/iStock-1221293664-1.jpg"

function Conferences() {

    const {t} = useTranslation();
    const [conferences, setConferences] = useState([]);
    useEffect(() => {
        let conferencesList = t('conferences-list', {returnObjects: true})
        setConferences(conferencesList)
    },[]);

    return (
        <div>
            <div className="main-title">
                <h3>{t("courses")}</h3>
            </div>
            <div className="mt-5 mx-4 mb-5">
                <div className="row">
                    <div className="col-4 px-4">
                        <Link >
                            <div className='card' style={{backgroundImage:`url(${img})`}}>
                                <div className='info'>
                                    <h1 className='title'>Data Mining</h1>
                                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse
                                        corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia
                                        blanditiis iste maiores optio ipsa, est dolorem fugit</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conferences;
import React, {useState, useEffect} from 'react';
import '../../style/home.css'
import {useTranslation} from 'react-i18next'
import "./../../style/pages.css"

function Books() {

    const {t} = useTranslation();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // let booksList = t('books-list', {returnObjects: true})
        // setBooks(booksList)

        const getBooks = fetch('http://localhost:8089/api/v1/public/book').then((response) => response.json())
            .then((data) => setBooks(data));

    },[]);
    return (
        <>
            <div>
                <div className="main-title">
                    <h3>{t("books")}</h3>
                </div>
                <div className="mt-5 mx-3">
                    {
                        books.map((p) => (
                            <div className="research mb-4">
                                <div>
                                    <h5 style={{fontWeight:"bold"}}>{p.title}</h5>
                                    <p>
                                        {p.authors}
                                    </p>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <span>
                                         {p.year}
                                    </span>
                                    <h6>
                                        {p.details}
                                    </h6>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Books;
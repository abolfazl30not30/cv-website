import React, {useState, useEffect} from 'react';
import '../../style/home.css'
import {useTranslation} from 'react-i18next'
import "./../../style/pages.css"
import axios from "axios";

function Books() {

    const {t} = useTranslation();
    const [books, setBooks] = useState([]);

    useEffect( () => {
        let booksList = t('books-list', {returnObjects: true})
        setBooks(booksList)

        // const getData = fetch('http://localhost:8089/api/v1/public/book').then((response) => response.json())
        //     .then((data) => setBooks(data));

        // const {data} = axios.get(`http://localhost:8089/api/v1/public/book`);
        // setBooks(data);

    },[]);

    return (
        <>
            <div>
                <div className="main-title">
                    <h3>{t("books")}</h3>
                </div>
                <div className="mt-5 mx-3">
                    {
                        books.map((book) => (
                            <div className="research mb-4">
                                <div>
                                    <h5 style={{fontWeight:"bold"}}>{book.title}</h5>
                                    <p>
                                        {book.authors}
                                    </p>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <span>
                                         {book.year}
                                    </span>
                                    <h6>
                                        {book.description}
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
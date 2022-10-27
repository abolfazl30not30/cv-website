import React,{Suspense} from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from "react-router-dom";
import i18next from 'i18next'
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import HttpApi from 'i18next-http-backend';
import Backend from 'i18next-http-backend';
i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(resourcesToBackend((language, namespace, callback) => {
        import(`/public/assetes/locales/${language}/${namespace}.json`)
            .then((resources) => {
                callback(null, resources)
            })
            .catch((error) => {
                callback(error, null)
            })
    }))
    .init({
        supportedLngs:["en","fa"],
        // resources: {
        //     en: {
        //         translation: {
        //             "title": "Welcome to React and react-i18next"
        //         }
        //     },
        //     fa: {
        //         translation: {
        //             "title": "سلام خوبی"
        //         }
        //     }
        // },
        fallbackLng: "en",
        detection:{
            order: [ 'htmlTag','cookie', 'localStorage' , 'path', 'subdomain'],
            caches:['cookie']
        },
        debug: false,
        backend:{
            loadPath: `/assets/locales/{{lng}}/translation.json`,
        },
        react :{
            useSuspense:false
        }
    });
// ReactDOM.render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>, document.getElementById("root"));
const loadingMarkup = (
    <div className="py-4 text-center">
        <h3>Loading..</h3>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={loadingMarkup}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter>
    </Suspense>
);

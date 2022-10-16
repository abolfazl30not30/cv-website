import React, {Component} from 'react';
import mainImg from "../img/main_photo.jpg"
import '../style/home.css'
class Home extends Component {
    state = {}

    render() {
        return (
            <>
                <div className="d-flex justify-content-center align-items-start mt-5 card-contain">
                    <div className="mainImgContain">
                        <img src={mainImg} className="mainImg"/>
                    </div>
                        <div className="cv-text mt-4">
                            <h5>Spectral Methods, ODEs, PDEs And Scientific Computing</h5>
                            <h2>Dr. Kourosh Parand</h2>
                            <h6>
                                I am Professor @ Department of Computer Sciences,
                                Faculty of Mathematical Sciences, Shahid Beheshti University
                            </h6>
                            <p>
                                My main research field is Scientific Computing, Spectral Methods, Meshless methods, Ordinary
                                Differential Equations(ODEs), Partial Differential Equations(PDEs) and Computational
                                Neuroscience Modeling.
                            </p>
                            <div className="d-flex justify-content-center">
                                <button className="cv-btn">Download CV</button>
                                <button className="cv-btn">Contact</button>
                            </div>
                        </div>
                </div>
            </>
        );
    }
}

export default Home;
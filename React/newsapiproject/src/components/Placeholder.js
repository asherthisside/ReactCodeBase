import React, { Component } from 'react'
import placeholderImage from '../placeholder_image.png'


export default class Placeholder extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-3 mx-1">
                        <div className="card" aria-hidden="true">
                            <img src={placeholderImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" aria-hidden="true">
                            <img src={placeholderImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" aria-hidden="true">
                            <img src={placeholderImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

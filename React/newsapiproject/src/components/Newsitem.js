import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        const {title, description, urltoImage} = this.props
        return (
            <div className="card m-2">
                <img src={urltoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} ... </h5>
                        <p className="card-text">{description}...</p>
                        <a href="/" className="btn btn-primary">Read More</a>
                    </div>
            </div>
        )
    }
}

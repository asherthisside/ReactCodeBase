import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        const {title, description, urltoImage, author, date, source, url} = this.props
        return (
            <div className="card m-2">
                <div className="news-source my-2 d-flex justify-content-center">
                <span class="badge text-bg-success">{source}</span>
                </div>
                <img src={urltoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} ... </h5>
                        <p className="card-text">{description}...</p>
                        <p className='text-muted'><small>By {!author ? "Unknown" : author} at {new Date(date).toLocaleString()}</small></p>
                        <a href={url} className="btn btn-primary">Read More</a>
                    </div>
            </div>
        )
    }
}

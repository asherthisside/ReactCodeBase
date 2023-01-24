import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={this.props.urltoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <a href="/" className="btn btn-primary">Read More</a>
                    </div>
            </div>
        )
    }
}

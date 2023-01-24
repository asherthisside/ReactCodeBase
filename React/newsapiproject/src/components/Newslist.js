import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class Newslist extends Component {
    news = []
    render() {
        return (
            <div className='row'>
                <div className="col-md-4 my-3">
                    <Newsitem title = "This is the title" description = "This is the description of this particular news flash that I got from this this this soucrce." urltoImage="https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Joe-Burrow14.jpg"/>
                </div>
                <div className="col-md-4 my-3">
                    <Newsitem title = "This is the title" description = "This is the description of this particular news flash that I got from this this this soucrce."  urltoImage="https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Joe-Burrow14.jpg"/>
                </div>
                <div className="col-md-4 my-3">
                    <Newsitem title = "This is the title" description = "This is the description of this particular news flash that I got from this this this soucrce."  urltoImage="https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Joe-Burrow14.jpg"/>
                </div>
                <div className="col-md-4 my-3">
                    <Newsitem title = "This is the title" description = "This is the description of this particular news flash that I got from this this this soucrce."  urltoImage="https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Joe-Burrow14.jpg"/>
                </div>
                <div className="col-md-4 my-3">
                    <Newsitem title = "This is the title" description = "This is the description of this particular news flash that I got from this this this soucrce."  urltoImage="https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Joe-Burrow14.jpg"/>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class Newslist extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            articles: [],
            pageNumber: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=9&page=${this.state.pageNumber}`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        this.setState({articles : data.articles})
    }

    async nextPageHandler() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=9&page=${this.state.pageNumber+1}`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        this.setState({articles : data.articles, pageNumber: this.state.pageNumber + 1})
        // console.log("Next");
    }

    async prevPageHandler() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=9&page=${this.state.pageNumber - 1}`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        this.setState({articles : data.articles, pageNumber: this.state.pageNumber + 1})
        // console.log("Previous");
    }

    render() {
        return (
            <>
            <div className='row'>
                {this.state.articles.map((element) => {
                    return <div className="col-md-4 my-3" key={element.title}>
                        <Newsitem title={element.title ? element.title.slice(0, 35) : ""} description={element.description ? element.description.slice(0, 99) : ""} urltoImage={element.urlToImage} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-around my-5">
                <button className='btn btn-dark' onClick={this.prevPageHandler}>&larr; Previous</button>
                <button className='btn btn-dark' onClick={this.nextPageHandler}>Next &rarr;</button>
            </div>
            </>
        )
    }
}


// PageSize = 
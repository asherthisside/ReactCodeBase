import React, { Component } from 'react'
import Newsitem from './Newsitem'
import placeholderImage from '../placeholder_image.png'
import Placeholder from './Placeholder'

export default class Newslist extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            articles: [],
            pageNumber: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=${this.props.pageSize}&page=${this.state.pageNumber}`
        this.setState({loading: true, articles: []})
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        this.setState({loading: false, articles : data.articles, totalResults: data.totalResults})
    }
    
    nextPageHandler = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=${this.props.pageSize}&page=${this.state.pageNumber+1}`
        this.setState({loading: true, articles: []})
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        this.setState({loading: false, articles : data.articles, pageNumber: this.state.pageNumber+1, totalResults: data.totalResults})
        // console.log("Next");
    }
    
    prevPageHandler = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=${this.props.pageSize}&page=${this.state.pageNumber-1}`
        this.setState({loading: true, articles: []})
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        this.setState({loading: false, articles : data.articles, pageNumber: this.state.pageNumber-1, totalResults: data.totalResults})
        // console.log("Previous");
    }

    render() {
        return (
            <>
            {this.state.loading && <Placeholder />}
            <div className='row'>
                {this.state.articles.map((element) => {
                    return <div className="col-md-4 my-3" key={element.title}>
                        <Newsitem title={element.title ? element.title.slice(0, 35) : ""} description={element.description ? element.description.slice(0, 99) : ""} urltoImage={element.urlToImage ? element.urlToImage : placeholderImage} author={element.author} date={element.publishedAt} source={element.source.name} url={element.url}/>
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-around my-5">
                <button className='btn btn-dark' onClick={this.prevPageHandler} disabled={this.state.pageNumber <= 1}>&larr; Previous</button>
                <button className='btn btn-dark' onClick={this.nextPageHandler} disabled={this.state.pageNumber >= Math.ceil(this.state.totalResults / 9)}>Next &rarr;</button>
            </div>
            </>
        )
    }
}


// PageSize = 
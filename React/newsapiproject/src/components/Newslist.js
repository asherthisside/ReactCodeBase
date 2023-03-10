import React, { Component } from 'react'
import Newsitem from './Newsitem'
import placeholderImage from '../placeholder_image.png'
import Placeholder from './Placeholder'
import { useContext } from 'react'
import queryContext from '../context/queryContext'

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
        this.props.dataLoader(url).then(data => {
            console.log(data);
            this.setState({loading: false, articles : data.articles, totalResults: data.totalResults})
        })
    }

    contextUser = () => {
        const a = useContext(queryContext)
        console.log("This is", a);
    }
    
    nextPageHandler = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=${this.props.pageSize}&page=${this.state.pageNumber+1}`
        this.props.dataLoader(url).then(data => {
            console.log(data);
            this.setState({loading: false, articles : data.articles, totalResults: data.totalResults, pageNumber: this.state.pageNumber + 1})
        })
    }
    
    prevPageHandler = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26096c9344b34bc2bd7b82422c3d6900&pageSize=${this.props.pageSize}&page=${this.state.pageNumber-1}`
        this.props.dataLoader(url).then(data => {
            console.log(data);
            this.setState({loading: false, articles : data.articles, totalResults: data.totalResults, pageNumber: this.state.pageNumber - 1})
        })
    }

    render() {
        return (
            <>
            {/* {this.contextUser()} */}
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
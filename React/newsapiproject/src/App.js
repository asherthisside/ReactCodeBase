import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newslist from './components/Newslist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QueryState from './context/queryState';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      mode: 'light'
    }
  }

  dataLoader = async (url) => {
    this.setState({loading: true, articles: []})
    let response = await fetch(url)
    let data = await response.json()
    return data;
}

  changeMode = () => {
    if (this.state.mode === 'light') {
      // console.log(this.state)
      console.log("Dark Mode")
      this.setState({mode: 'dark'})
      document.body.style.backgroundColor = "black"
    }
    else {
      console.log("Light Mode")
      this.setState({mode: 'light'})
      document.body.style.backgroundColor = "white"
    }
  }

  render() {
    return (
      <>
      <QueryState>
        <BrowserRouter>
          <Navbar mode={this.state.mode} changeMode={this.changeMode} dataLoader={this.dataLoader}/>
          <div className="container">
            <h1 className="text-center display-4 my-3" mode={this.state.mode}>Welcome to News Basket</h1>
            <Routes>
              <Route path='/' element=<Newslist key="general" category="general" country="in" pageSize="9" mode={this.state.mode} dataLoader={this.dataLoader}/> />
              <Route path='/sports' element=<Newslist key="sports"category="sports" country="in" pageSize="9" mode={this.state.mode} dataLoader={this.dataLoader}/> />
              <Route path='/science' element=<Newslist key="science" category="science" country="in" pageSize="9" mode={this.state.mode} dataLoader={this.dataLoader}/> />
              <Route path='/entertainment' element=<Newslist key="entertainment" category="entertainment" country="in" pageSize="9" mode={this.state.mode} dataLoader={this.dataLoader}/> />
              <Route path='/business' element=<Newslist key="business" category="business" country="in" pageSize="9" mode={this.state.mode} dataLoader={this.dataLoader}/> />
              <Route path='/health' element=<Newslist key="health" category="health" country="in" pageSize="9" mode={this.state.mode} dataLoader={this.dataLoader}/> />
              <Route path='/technology' element=<Newslist key="technology" category="technology" country="in" pageSize="9" mode={this.state.mode} dataLoader={this.dataLoader}/> />
            </Routes>
          </div>
        </BrowserRouter>
        </QueryState>
      </>
    )
  }
}
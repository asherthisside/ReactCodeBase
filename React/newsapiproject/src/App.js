import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newslist from './components/Newslist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      mode: 'light'
    }
  }

  changeMode = function () {
    if (this.state.mode == 'light') {
      console.log(this.state)
      // this.setState({mode: 'dark'})
    }
    else {
      // this.setState({mode: 'light'})
    }
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar mode={this.state.mode} changeMode={this.changeMode} />
          <div className="container">
            <h1 className="text-center display-4 my-3" mode={this.state.mode}>Welcome to News Basket</h1>
            <Routes>
              <Route path='/' element=<Newslist category="general" country="in" pageSize="9" mode={this.state.mode} /> />
              <Route path='/sports' element=<Newslist category="sports" country="in" pageSize="9" mode={this.state.mode} /> />
              <Route path='/science' element=<Newslist category="science" country="in" pageSize="9" mode={this.state.mode} /> />
              <Route path='/entertainment' element=<Newslist category="entertainment" country="in" pageSize="9" mode={this.state.mode} /> />
              <Route path='/business' element=<Newslist category="business" country="in" pageSize="9" mode={this.state.mode} /> />
              <Route path='/health' element=<Newslist category="health" country="in" pageSize="9" mode={this.state.mode} /> />
              <Route path='/technology' element=<Newslist category="technology" country="in" pageSize="9" mode={this.state.mode} /> />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    )
  }
}
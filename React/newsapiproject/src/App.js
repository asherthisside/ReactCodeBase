import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newslist from './components/Newslist';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <div className="container">
        <h1 className="text-center display-4 my-3">Welcome to News Basket</h1>
        <Newslist category="business" country="us" pageSize="9"/>
      </div>
      </>
    )
  }
}


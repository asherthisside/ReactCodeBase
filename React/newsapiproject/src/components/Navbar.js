import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

export default function Navbar(props) {
    const [query, setQuery] = useState('')
    function getValue(e) {
        setQuery(e.target.value)
    }
 
    function submitForm (e) {
        e.preventDefault();
        let url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=26096c9344b34bc2bd7b82422c3d6900`
        props.dataLoader(url).then(data => {
            console.log(data);
        })
    }

    return (
        <nav className={`navbar navbar-expand-lg border-3 border-bottom bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">News Basket</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About Us</a>
                        </li>
                        <li className="nav-item mx-3">
                            <div className="dropdown">
                                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to='/'>General</Link></li>
                                    <li><Link className="dropdown-item" to='/health'>Health</Link></li>
                                    <li><Link className="dropdown-item" to='/science'>Science</Link></li>
                                    <li><Link className="dropdown-item" to='/sports'>Sports</Link></li>
                                    <li><Link className="dropdown-item" to='/technology'>Technology</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <i className={`fa-solid fa-sun text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{fontSize: "1.5rem"}}></i>
                    <div className="form-check form-switch mx-3">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
                            <i className={`fa-solid fa-moon text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{fontSize: "1.5rem"}}></i>
                        </div>
                    <form className="d-flex" role="search" onSubmit={submitForm}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={getValue}/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
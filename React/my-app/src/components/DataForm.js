import React, { useState } from 'react'


export function DataForm(props) {
    const [text, setText] = useState("")

    const upperClick = function () {
        const newText = text.toUpperCase()
        setText(newText)
    }

    const lowerClick = function () {
        const newText = text.toLowerCase()
        console.log(text.split("i"));
        setText(newText)
    }

    function upperCaseCounter() {
        let counter = 0;
        for (let i = 0; i < text.length; i++) {
            if(/^[A-Z]+$/.test(text[i])) {
                counter += 1
            }            
        }
        return counter
    }
    
    function lowerCaseCounter() {
        let counter = 0;
        for (let i = 0; i < text.length; i++) {
            if(/^[a-z]+$/.test(text[i])) {
                counter += 1
            }            
        }
        return counter
    }
    
    function clearText() {
        setText('')
    }

    const changer = function (e) {
        setText(e.target.value)
    }

    return (
        <>
            <div>
                <div className="mb-3">
                    <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} id="exampleFormControlTextarea1" rows="5" onChange={changer}></textarea>
                </div>
                <button className="btn btn-outline-primary m-2" onClick={upperClick} >Convert in Uppercase</button>
                <button className="btn btn-outline-primary m-2" onClick={lowerClick} >Convert in lowercase</button>
                <button className="btn btn-outline-primary m-2" onClick={clearText} >Clear Text</button>
            </div>

            <h2 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Results: </h2>
            <table className={`table table-bordered text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <tr>
                    <th>No. of characters: </th>
                    <td>{text.length}</td>
                </tr>
                
                <tr>
                    <th>No. of words: </th>
                    <td>{text.split(" ").length}</td>
                </tr>
                
                <tr>
                    <th>Uppercase characters: </th>
                    <td>{upperCaseCounter()}</td>
                </tr>
                
                <tr>
                    <th>Lowercase characters: </th>
                    <td>{lowerCaseCounter()}</td>
                </tr>
            </table>
        </>
    )
}

export default DataForm
// Add Preview for user.
// Copy to Clipboard 
// Special Characters 
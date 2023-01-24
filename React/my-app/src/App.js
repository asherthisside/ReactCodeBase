import './App.css';
import Navbar from './components/Navbar';
import DataForm from './components/DataForm';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light')

  function changeMode() {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Analyzer" home="Home" about="About Us" mode={mode} toggleMode={changeMode} />
        <div className="container my-5">
        <Routes>
          <Route path='/' element={<DataForm heading="Enter the text here" mode={mode} />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductsList /> }></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/checkout/checkout';
import { CartProvider } from './components/context/Cartcontext';
import './App.css';
import './components/CartWidget/CartWidget.css';
import './components/NavBar/NavBar.css';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <CartProvider>
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<ItemListContainer />} />
                            <Route path='/category/:categoryId' element={<ItemListContainer />} />
                            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/checkout' element={<Checkout />} />
                            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                        </Routes>
                    </CartProvider>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;

import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Homescreen from './components/Homescreen';
import Product from './components/Product';
import './index.css';
function App() {
    return (
        <BrowserRouter>
        <div>
            <header>
                <Link to="/">amzona</Link>
            </header>
            <main>
                <Routes>
                    <Route path="/product/:slug" element={<Product/>}></Route>
                    <Route path="/" element={<Homescreen/>}></Route>
                </Routes>
                
            </main>
        </div>
        </BrowserRouter>
    )
}

export default App

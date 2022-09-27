import React from 'react';
import './index.css';
import NavBar  from './Components/NavBar';
import { Cart } from './Components/CartView/Cart';
import MiComponente from './Components/MiComponente';
import  ItemDetailContainer  from './Components/ItemDetailsContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
    return (
        <>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={ <ItemDetailContainer />}/>
            <Route path='/categoria/:IdCategoria' element={ <ItemDetailContainer />}/>
            <Route path='/producto/:IdProducto' element={ <ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;
{/* <MiComponente initial={1} stock={15}/> */}


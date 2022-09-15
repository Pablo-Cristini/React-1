import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar  from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import MiComponente from './Components/MiComponente';
import { products } from './assets/productos';




const App = () => {
    const mensaje = "Soy un texto";
    return (
        <>
        <NavBar />
        <ItemListContainer greeting={products}/>
        <MiComponente initial={1} stock={15}/>
        </>
    )
}
export default App;


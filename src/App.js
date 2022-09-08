import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar  from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

const App = () => {
    const mensaje = "Soy un texto";
    return (
        <>
        <NavBar />
        <ItemListContainer greeting={mensaje}/>
        </>
    )
}
export default App;


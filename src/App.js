import React from 'react';
import './index.css';
import NavBar  from './Components/NavBar';
import MiComponente from './Components/MiComponente';
import  ItemDetailContainer  from './Components/ItemDetailsContainer/ItemDetailContainer';


const App = () => {
    const mensaje = "Soy un texto";
    return (
        <>
        <NavBar />
        <ItemDetailContainer />
        <MiComponente initial={1} stock={15}/>
        </>
    )
}
export default App;


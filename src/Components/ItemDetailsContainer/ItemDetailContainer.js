import React , {useEffect, useState} from "react";
import { CircularProgress } from "@mui/material";
import '../../App.css';
import '../styles.css';
import ItemDetail from "./ItemDetail";

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getItem = async () => {
        try {
            const respuesta = await fetch('https://api.storerestapi.com/products')
            const data = await respuesta.json()
            setProductos(data.data)
            
        } 
        catch(err){
            console.log("ocurrio un error", err);
            console.error("error", err);
        }  
        finally{
            setLoading(false)
        }
    }
        getItem();
        
    }, [])


    return (
        <>
        <h1>{greeting}</h1>
        {  
            loading
            ? <CircularProgress/>
            : <div class="contenedor">
                { productos.map((producto,i) => <ItemDetail producto={producto} key={i}/>) }
            </div>
        }
        </>
    )
} 


export default ItemListContainer



import React , {useEffect, useState} from "react";
import { CircularProgress } from "@mui/material";

const ItemListContainer = ({greeting}) => {

    const [producto, setProducto] = useState({})

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getItem = async () => {
        try {
            const respuesta = await fetch('https://fakestoreapi.com/products/2')
            const data = await respuesta.json()
            setProducto(data)
            console.log(producto)
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
            ?<CircularProgress/>
            : <h2>{producto.title}</h2>
        }
        </>
    )
} 

export default ItemListContainer

import { EventBusy } from "@mui/icons-material";
import React, {useState} from "react";

const MiComponente = ({initial, stock}) => {

    const [cantidad, setCantidad] = useState(initial);

    const increase = () => {
        if (cantidad < stock) {
        setCantidad( cantidad + 1)
        }
    }
    const dicrease = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1)
        }   
    }
    const reset = () => {
        setCantidad (0)
    }
    return (
        <>
        <h2>Cantidad del producto: {cantidad}</h2>
        <button disabled={cantidad === stock} onClick={increase}>+</button>
        <button onClick={reset}>Reset</button>
        <button disabled={cantidad === initial} onClick={dicrease}>-</button>
        </>
    )
} 
export default MiComponente

import React from "react";

const ItemDetail = ({producto}) => {
    return <div className="contenedor">
            <h2>{producto.title}</h2>
            <h2>${producto.price}</h2> 
            <h2>{producto.description}</h2>
        </div>
}
export default ItemDetail

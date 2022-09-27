import React from "react";
import '../../App.css'
const ItemDetail = ({producto}) => {
    return <div className="contenedorItemDetail">
            <h2 style={styles.title}>"{producto.title}"</h2>
            <h2 style={styles.price}>${producto.price}</h2> 
        </div>
}
export default ItemDetail

const styles = {
    title: {
        fontSize: '15px',
    },
    price: {
        fontSize: '16px',
    }
}

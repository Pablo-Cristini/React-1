import React from "react"
import { Item } from "./Item/Item"
const ItemList = ({listProducts}) => {
    console.log(listProducts)
    return (
        <>
        {listProducts.map((prod, i )=> <Item key={`${prod.product}-${i}`} product= {prod}/>)}
        </>
    )
}

export {ItemList}
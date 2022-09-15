import React, { useEffect, useState } from 'react';
import { Text, Heading } from '@chakra-ui/react'
import { products } from '../../assets/productos';
import { customFetch } from '../utils/customFetch';
import { ItemList } from '../ItemList';


const ItemListContainer = ({greeting}) => {

        const [listProducts, setListProducts] = useState([])

        useEffect (() => {
            customFetch(products)
            .then(res => setListProducts(res))
        }, [])
        console.log(listProducts) 
        
        return (
            <>
            <ItemList listProducts={listProducts} />
            </>
        )
}
export default ItemListContainer
import React, { useState } from 'react';
import { Text, Heading  } from '@chakra-ui/react'
import { products } from '../../assets/productos';
import { customFetch } from '../utils/customFetch';
import { ItemList } from '../ItemList';


const ItemListContainer = ({greeting}) => {

        const [listProducts, setListProducts] = useState([])
        return (
            <>
            <ItemList listProducts={products} />
            </>
        )
}
export default ItemListContainer
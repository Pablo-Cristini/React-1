import { products } from '../../assets/productos'
import {Text} from '@chakra-ui/react'
const Item = ({product}) => {
    return (
        <>
        <Text>{products.product}</Text>
        </>
    )
}
export {Item}
import {Text} from '@chakra-ui/react'
const Item = ({product}) => {
    return (
        <>
        <Text>{product.name}</Text>
        <Text>{product.brand}</Text>
        <Text>{product.price}</Text>
        </>
    )
}
export {Item}
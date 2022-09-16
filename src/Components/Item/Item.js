import {Text} from '@chakra-ui/react'
const Item = ({product}) => {
    return (
        <>
        <Text>{product.name}</Text>
        </>
    )
}
export {Item}
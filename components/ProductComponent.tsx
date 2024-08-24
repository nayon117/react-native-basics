import { View, Text, Image } from 'react-native'
import React from 'react'

interface ProductProps {
    name: string;
    price: number;
    image: string;
    description: string;
}

const ProductComponent = ({ name,
    price,
    image,
    description}:ProductProps) => {
    
  return (
    <View>
      <View>
        <View>
            <Image 
            source={{uri:image}}
           className='w-40 h-40'
            />
        </View>
        <View >
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Text>{description}</Text>
        </View>
      </View>
    </View>
  )
}

export default ProductComponent
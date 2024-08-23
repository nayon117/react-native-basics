import { View, Text, Image, Button, Alert } from 'react-native'
import React from 'react'

const CarCard = () => {
    const carName = 'Toyota Corolla'
    const carRating = 4.5
    const carDescription = 'This is a description of a car'

  return (
    <View className='flex items-center'>
        <Image 
        source={ require('../assets/car.jpg') }
        className='w-64 h-64 mx-auto'
        resizeMode='contain'
        />
      <View className='space-y-5 flex justify-between flex-row items-center gap-5'>
        <Text>{carName} </Text>
        <Text>Rating: {carRating}</Text>
      </View>
      <Text className='my-6'>{carDescription}</Text>
      <Button title='Add to cart' color='teal' onPress={() => Alert.alert('Added to cart')} />
    </View>
  )
}

export default CarCard
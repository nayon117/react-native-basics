import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View className='mt-12'>
      <Image 
      source={require('../assets/forest.jpg')}
        // resizeMode='contain'
        className=' w-48 h-48 rounded-full mx-auto'
      />
      <View className='space-y-7 flex items-center justify-center'>
      <Text className=' text-xl mt-4'>Hasibul Hasan</Text>
      <Text className='mb-6'>My name is Nayon and I love coding</Text>
      <Button title='Press Me' color='gray' />
      </View>
    </View>
  )
}

export default Profile
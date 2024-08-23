import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
        {/* enternal images */}
      <Image 
      source={require('../assets/forest.jpg')}
        style={{width: 200, height: 200}}
        resizeMode='contain'
      />

      {/* external images */}

        <Image  
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 200, height: 200}}
        resizeMode='contain'
        />

    </View>
  )
}

export default ImageComponent
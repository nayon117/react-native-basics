import { View, Text, Button, Alert, Pressable } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View>
      <Text>My name is Hasibul Hasan Nayon</Text>
      <Text>I am 24 years old</Text>
      <Text>Here is my x handle</Text>
      <Text>I love react-native</Text>
      <Button title='learn more' onPress={()=>Alert.alert('Button clicked')} color='teal'/>

    <Pressable onPress={()=>Alert.alert('pressed')} >
        <Text>Press me</Text>
    </Pressable>
    <Pressable onPressIn={()=>Alert.alert('pressed in')} >
        <Text>on press in</Text>
    </Pressable>
    <Pressable onPressOut={()=>Alert.alert('pressed out')} >
        <Text>Press me</Text>
    </Pressable>
    <Pressable onLongPress={()=>Alert.alert('pressed long')} >
        <Text>Press me</Text>
    </Pressable>
    <Pressable onPress={()=>Alert.alert('pressed')} >
        <Text>Press me</Text>
    </Pressable>
    </View>
  )
}

export default Card
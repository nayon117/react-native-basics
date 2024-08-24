import { View, Text, FlatList } from 'react-native'
import React from 'react'

const FlatListTest = () => {
    const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Strawberry']
  return (
    <View>
      <FlatList
      data={fruits}
      keyExtractor={(item)=>item}
      renderItem={({item})=><Text>{item}</Text>}
      />
    </View>
  )
}

export default FlatListTest
import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayOfObjects = () => {

    const locations = [
        {id:1, name:'Dhaka', population:10000000},
        {id:2, name:'Chittagong', population:5000000},
        {id:3, name:'Sylhet', population:3000000},
        {id:4, name:'Khulna', population:2000000},
        {id:5, name:'Rajshahi', population:1500000},
        {id:6, name:'Barishal', population:1000000},
        {id:7, name:'Rangpur', population:900000},
        {id:8, name:'Mymensingh', population:800000},
        {id:9, name:'Comilla', population:700000},
        {id:10, name:'Narayanganj', population:600000},
    ]

  return (
    <View>
       <FlatList 
       keyExtractor={(item)=>item.id.toString()}
       data={locations}
       renderItem={({item})=><Text>{item.name} - {item.population}</Text>}
       />
    </View>
  )
}

export default ArrayOfObjects
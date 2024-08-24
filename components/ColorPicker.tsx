import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ColorPicker = () => {
    const colors = ['#FF5753', '#FFD635', '#8AC926', '#1982C4', '#6A4C93']
    const [selectedColor, setSelectedColor] = React.useState('#fff')
  

  return (
    <View style={{backgroundColor:selectedColor}} >
        <Text className='text-2xl font-semibold text-center mt-12'>Pick a Color</Text>
       <View className='flex flex-row items-center justify-between min-h-screen'>
        {colors.map((color)=>(
            <TouchableOpacity
            
            style={{
                backgroundColor: color,
                width: 40,
                height: 40,
                borderRadius: 20,
                margin: 5,
                borderWidth: selectedColor === color ? 2 : 0,
                borderColor: '#000'
            }}
            onPress={()=>setSelectedColor(color)} />
        ))}
       </View>
    </View>
  )
}

export default ColorPicker
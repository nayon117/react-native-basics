import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);
  return (
    <View>
        <Text style={{backgroundColor: isOn ? 'green' : 'red', padding: 10, color: 'white', textAlign: 'center'}}>{isOn ? 'ON' : 'OFF'}</Text>

        <Button title="Toggle" onPress={()=>setIsOn(!isOn)} />
    </View>
  )
}

export default ToggleButton
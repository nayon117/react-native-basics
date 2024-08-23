import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InternalStyle = () => {
  return (
    <View>
      <Text style={styles.textStyles} >InternalStyle</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyles: {
        color:'teal',
        fontSize: 20,
        fontWeight: 'bold',
        width: 200,
        height: 200,
    }
})

export default InternalStyle
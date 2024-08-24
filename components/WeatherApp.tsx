import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

const WeatherApp = () => {

    const [search, setSearch] = React.useState('')
    const [result, setResult] = React.useState('')


    const weatherForcast = [
        {location: 'Lagos', weather: '20c, clear'},
        {location: 'New York', weather: '15c, cloudy'},
        {location: 'Tokyo', weather: '25c, sunny'},
        {location: 'London', weather: '18c, rainy'},
        {location: 'Mumbai', weather: '30c, clear'},
    ]

    const getWeather = () => {
       const weatherInfo = weatherForcast.find((item)=>item.location.toLowerCase() === search.toLowerCase())
        if(weatherInfo){
            setResult(weatherInfo.weather)
        }else{
            setResult('Location not found')
        }
    }

  return (
    <View className='flex justify-center p-6 space-y-6'>
      <Text className='text-xl font-semibold'>WeatherApp</Text>
      <TextInput  
        placeholder="Search for location"
        value={search}
        onChangeText={setSearch}
        className='border border-gray-400 p-2'
      />
      <Text className='mb-4'>{result}</Text>
      <Button title="Get Weather" onPress={getWeather} />
    </View>
  )
}

export default WeatherApp
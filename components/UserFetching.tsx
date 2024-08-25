import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserFetching = () => {
    const [users,setUsers] = useState(null)
    
    useEffect(()=>{
        const fetchUser = async() =>{
            try {
                const res = await fetch('https://randomuser.me/api/?results=10')
                const data = await res.json()
                setUsers(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    },[])
    console.log(users)
  return (
    <View>
      <Text>
        <FlatList 
        data={users}
        keyExtractor={(item: any) => item.login.uuid}
        renderItem={({item})=>(
            <View className='flex flex-row gap-3'>
              <View>
              <Image
              source={{uri:item.picture.thumbnail}}
              className='w-44 h-44'
              resizeMode='contain'
              />
              </View>
               <View className='space-y-3'>
               <Text>{`${item.name.first} ${item.name.last}`}</Text>
               <Text>{item.email}</Text>
               </View>

            </View>
        )}
        />
      </Text>
    </View>
  )
}

export default UserFetching
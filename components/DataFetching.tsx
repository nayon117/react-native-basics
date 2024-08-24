import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <View className="p-6">
      <Text>Users</Text>
      <View className="mt-12 p-4">
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View className="space-y-5">
              <Text>{item.name}</Text>
              <Text>{item.username}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default DataFetching;

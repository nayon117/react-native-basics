import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] =useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () =>{
    setTodos([...todos, input])
    setInput("");
  }
  const deleteTodo = (index:number) => () =>{
    const newTodos = todos.filter((_,i)=>i!== index)
    setTodos(newTodos)
  }

  return (
    <View className="flex justify-center p-6 space-y-6">
      <Text>Todo List</Text>
      <TextInput
        value={input}
        onChangeText={setInput}
        className="border border-gray-400 p-2 mb-4"
        placeholder="Add todo"
      />
      <Button title="Add Todo" onPress={addTodo} />
    
     <View>
        {todos.map((item,index)=>(
            <Text
             key={item}
              className="my-4"
              onLongPress={deleteTodo(index)}
              >{item}</Text>
        ))}
        </View>
    </View>
  );
};

export default Todo;

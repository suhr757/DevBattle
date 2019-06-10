import React, { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View, AppRegistry, Image } from 'react-native';

function Greeting(props) {
  return (
    <Text>Hello {props.name}!</Text>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (i) => setCounter(counter+i);

  setInterval(() => (
    incrementCounter(1)
  ), 1000);

  return (
    <Text>The count is {counter}</Text>
  );
}

function Texty() {
  const [text, setText] = useState('nothing yet');
  const updateText = (v) => setText(v);

  return (
    <View>
      <TextInput 
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => updateText(text)}
      />
      <Text>
        {text}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="Steve" />
      <Greeting name="Joe" />
      <Greeting name="Chris" />
      <Counter />
      <Texty />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

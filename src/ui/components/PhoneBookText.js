import React from 'react';
import {TextInput} from 'react-native';

function PhoneBookText(props) {
  return (
    <TextInput
    placeholder = {props.placeholder}
      placeholderTextColor='#333'
      style={{ 
        color:'#000',
        marginTop:15,
        padding:5, height: 40, width:'100%', borderColor: 'gray', borderWidth: 1}}
      onChangeText={props.onChangeText}
      keyboardType = {props.keyboardType}
      value={props.value}
    />
  );
}

export default PhoneBookText;

import React from 'react';
import {View} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
export default function PhoneBookDropDown(props) {

 

  return (
    <View>

<Dropdown
        label={props.placeholder}
        data={props.data}
        onChangeText = {props.onChangeText}
        value = {props.value}
      />
    </View>
  );
}

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
function Wrapper(props) {
  var userDatas = useSelector(state => state.phoneReducer.UserData);
  return (
    <SafeAreaView>
      <Text
        style={{
          padding: 5,
          fontSize: 18,
          fontWeight: '400',
          paddingVertical: 10,
        }}>
        {' '}
        Total user saved: {userDatas.length}{' '}
      </Text>

      {props.scrollable === true ? (
        <ScrollView>
          <View style={{padding: 20}}>{props.children}</View>
        </ScrollView>
      ) : (
        <View style={{padding: 20}}>{props.children}</View>
      )}
    </SafeAreaView>
  );
}

export default Wrapper;

import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteUser} from '../../store/actions/userActions';
function UserListComponent(props) {
  const dispatch = useDispatch();

  onDeleteUser = () => {
    dispatch(deleteUser(props.id));
  };
  return (
    <View style={{padding: 5}} key={props.index}>
      <Text>Name: {props.name}</Text>
      <Text>Phone: {props.phone}</Text>

      <Text>Country: {props.country}</Text>

      <Text>Fav phone Brand: {props.brand}</Text>
      <Button style={{padding: 7}} title="Delete" onPress={onDeleteUser} />
      <View style={{width: '100%', height: 2, backgroundColor: '#808080'}} />
    </View>
  );
}

export default UserListComponent;

/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import Wrapper from '../hoc/Wrapper';
import countryData from '../../data/country.json';
import {Button} from 'react-native';
import phoeBrandData from '../../data/phoneBrand.json';
import PhoneBookDropDown from '../components/PhoneBookDropDown';
import PhoneBookText from '../components/PhoneBookText';
import {saveUser} from '../../store/actions/userActions';
import {useDispatch} from 'react-redux';

function Dashboard(props) {
  const [user, setUser] = useState({
    name: '',
    phone: '',
    country: '',
    brand: '',
  });

  // eslint-disable-next-line no-undef
  updateUser = (key, value) => {
    setUser(prevValue => {
      switch (key) {
        case 'name':
          return {
            ...prevValue,
            name: value,
          };
        case 'phone':
          return {
            ...prevValue,
            phone: value,
          };

        case 'country':
          return {
            ...prevValue,
            country: value,
          };
        case 'brand':
          return {
            ...prevValue,
            brand: value,
          };
      }
    });
  };

  const dispatch = useDispatch();

  onsaveUser = () => {
    dispatch(saveUser(user));
    setUser({name: '', phone: '', country: '', brand: ''});
  };

 

  return (
    <Wrapper>
      <PhoneBookText
        placeholder="Enter your name"
        keyboardType="name-phone-pad"
        onChangeText={value => this.updateUser('name', value)}
        value={user.name}
      />

      <PhoneBookText
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        onChangeText={value => this.updateUser('phone', value)}
        value={user.phone}
      />

      <PhoneBookDropDown
        placeholder="Enter Country"
        data={countryData}
        value={user.country}
        onChangeText={value => this.updateUser('country', value)}
      />

      <PhoneBookDropDown
        placeholder="Enter fav phone brand"
        data={phoeBrandData}
        value={user.brand}
        onChangeText={value => this.updateUser('brand', value)}
      />

      <Button
        onPress={onsaveUser}
        title="Save"
        color="#841584"
        disabled={
          user.name == '' ||
          user.phone == '' ||
          user.country == '' ||
          user.brand == ''
        }
      />
    </Wrapper>
  );
}

export default Dashboard;

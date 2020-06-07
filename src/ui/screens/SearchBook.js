import React, {useState} from 'react';
import countryData from '../../data/country.json';
import {Button, Text} from 'react-native';
import phoeBrandData from '../../data/phoneBrand.json';
import Search from './../components/Search';
import PhoneBookDropDown from '../components/PhoneBookDropDown';
import Wrapper from '../hoc/Wrapper';

function SearchBook() {
  const [searchParams, serParams] = useState({
    country: '',
    brand: '',
  });

  updateSearchParams = (key, value) => {
    serParams(prevValue => {
      if (key == 'country') {
        return {
          ...prevValue,
          country: value,
        };
      } else {
        return {
          ...prevValue,
          brand: value,
        };
      }
    });
  };

  return (
    <Wrapper>
      <PhoneBookDropDown
        placeholder="Enter Country"
        data={countryData}
        value={searchParams.country}
        onChangeText={value => this.updateSearchParams('country', value)}
      />

      <PhoneBookDropDown
        placeholder="Enter fav phone brand"
        data={phoeBrandData}
        value={searchParams.brand}
        onChangeText={value => this.updateSearchParams('brand', value)}
      />

      <Button
        //onPress={onsaveUser}
        title="search"
        color="#841584"
        disabled={searchParams.country == '' && searchParams.brand == ''}
      />

{searchParams.country != '' && searchParams.brand != '' ? 
        <Text> Search by Country: {searchParams.country} and brand: {searchParams.brand} </Text>
       : searchParams.country != '' ? 
        <Text> Search by Country:  {searchParams.country} </Text>
       : searchParams.brand != '' ? 
        <Text> Search by Brand:  {searchParams.brand} </Text>
       : 
        <Text> No Search parameter selected. </Text>
      }

       <Search
        paraCountry = {searchParams.country}
        paraBrand = {searchParams.brand}
        
        />
    </Wrapper>
  );
}


export default SearchBook;

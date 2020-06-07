import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import UserListComponent from './UserListComponent';

function Search(props) {
  var userDatas = useSelector(state => state.phoneReducer.UserData);

  var searchResult = userDatas.filter(function(item) {
    if (props.paraCountry != '' && props.paraBrand != '') {
      return item.country == props.paraCountry && item.brand == props.paraBrand;
    } else if (props.paraCountry != '') {
      return item.country == props.paraCountry;
    } else {
      return item.brand == props.paraBrand;
    }
  });

 

 return(
 <View style={{marginTop:10}}>
     {
         searchResult.length>0?
         <ScrollView> 
         {searchResult.reverse().map((item, index) => {
         return (
           <UserListComponent
             name={item.name}
             key={index.toString()}
             country={item.country}
             phone={item.phone}
             brand={item.brand}
             id={item.id}
            
           />
         );
       })}
      
    
       </ScrollView> :

       <Text> No result found!! </Text>

     }

      </View>
      )
}

export default Search;

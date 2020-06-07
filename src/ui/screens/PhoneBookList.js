import React from 'react';
import Wrapper from '../hoc/Wrapper';
import {useSelector} from 'react-redux';
import UserListComponent from '../components/UserListComponent';

function PhoneBookList() {
  var userDatas = useSelector(state => state.phoneReducer.UserData);
  return (
    <Wrapper scrollable={true}>
      {userDatas.reverse().map((item, index) => {
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
    </Wrapper>
  );
}

export default PhoneBookList;

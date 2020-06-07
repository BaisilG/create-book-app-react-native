import {USER_SAVE, USER_DELETE} from '../actions/actionTypes';

const initialState = {
  UserData: [],
};

export default phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SAVE:
      action.user.id = state.UserData.length+1;
      return {
        ...state,
        UserData:state.UserData.concat(action.user)
      }

      case USER_DELETE:
        return{
          ...state,
          UserData:state.UserData.filter(function(item){
            return item.id != action.id;
          })
        }

  

    default:
      return state;
  }}

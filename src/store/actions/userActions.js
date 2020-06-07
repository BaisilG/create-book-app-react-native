import {USER_SAVE, USER_DELETE} from './actionTypes';

const saveUser = user => {
  return {
    type: USER_SAVE,
    user: user,
  };
};

const deleteUser = id => {
  return {
    type: USER_DELETE,
    id: id,
  };
};

export {saveUser, deleteUser};

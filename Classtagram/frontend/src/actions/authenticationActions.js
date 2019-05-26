import * as types from './index';

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user
  }
};

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};

//never fail
export const mainInfoAction = (user) => {
  return {
    type: types.MAIN_INFO,
    user
  }
};


export const logoutUserAction = (user) => {
  return {
    type: types.LOGOUT_USER,
    user
  }
};
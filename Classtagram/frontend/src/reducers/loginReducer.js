import * as types from '../actions';
import { initialState } from '../components/loginPage'
import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'

export default function(state = initialState, action) {
  const response = action.response;
  
  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
    	localStorage.setItem('user', JSON.stringify(action.response));
      return {...state, response};
    	/*return Object.assign({}, {
      		isLoggedIn: true,
      		response: response
    	})*/
    	// user(loginpage's stage 에 isLoggedIn과 response라는 key를 추가하고, 각각 true와 response(backend에서 온 Json)를 value)
    	// return { ...state, response };
    	// return {...state, response};
    case types.LOGIN_USER_ERROR:
      return {...state, response};
    	/*return Object.assign({},{
    		response:response
     	});*/
    default:
      return state;
  }
}





    // return JsonResponse({
    //   'success':True,
    //   'token': token.key, 
    //   'username': user.username, 
    //   'name': user.name, 
    //   'student_number': user.student_number,
    //   'school' : user.school,
    //   'major' : user.major,
    //   'is_student' : user.is_student,
    //   'message':'login successed!'
    //   })
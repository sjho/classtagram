////////////////////////////////////////////////////////////////////////////////////////////////////////
// 05.22(수)
utils 일단 사용하지 않음
reducer에,
localStorage.setItem('user', JSON.stringify(action.data))
action.data 는 username / password 로 이루어진 Json
이것을 localStroage에 저장.


Object.assign(target, source1, source2, etc..)
Json Merge


의도했으나 못한것 :
Main page에 처음 들어갈때,
백엔드로부터 데이터를 불러오고
그것을 스테이트에 저장
////////////////////////////////////////////////////////////////////////////////////////////////////////
// 05.25(토)
components < Redux 참조 X / State 만을 참조함
(State를 바꿀수는 없음(props에 콜백호출해서 가능))
container < Redux 참조 O / Actions을 보내서 리덕스 변경 가능

우리 프론트엔드에서 :
각 loginPage, mainPage등은 모두 container/App.js 의 Child임
-> loginPage 에서 상태를 바꾸거나, 참조하고싶을때(Redux를 이용해야 할 때) props(container/App.js)에서 액션을 보냄

////////////////////////////////////////////////////////////////////////////////////////////////////////

React, Redux, saga 이해

Login component 

this.props.dispatch(loginUserAction({
	username: this.state.username,
	password: this.state.password
}));

Actions

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};

Watchers user{username, password}

export function* watchLoginAuthentication() {
  while(true){
    // 유저 정보를 받아옵니다.
    const { user } = yield take(types.LOGIN_USER);
    // loginSaga를 call하고 user정보를 보냅니다.
    yield call(loginSaga, user);
  }
}

Sagas user -> payload

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);	// login User Service에 payload 인풋
    //other action
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}

Service user -> payload -> request

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = 'http://127.0.0.1:8000/backend/login/';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
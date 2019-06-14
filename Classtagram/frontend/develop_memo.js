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

state(App.js)

localStorage

backend



////////////////////////////////////////////////////////////////////////////////////////////////////////
// 05.26(일)
State = {

  username: "",
  password: "",
  pwconfirm: "",
  is_student: true,
  name: "",
  student_number: "",
  school: "",
  major: ""

  response: {
  	success:
  	message:

  	user: {
  		username: "",
  		is_student: true,
  		name: "",
      student_number: "",
  		school: "",
  		major: ""	
  	}
  	course: {
  		coursename: 
		  superuser:
		  participants: {

		}
  	}
  	requse: {
  		user:
  		course:
  	}
  	photo: {
  		coursename:
  		photo:
  		created:

  	}
  	tag: {
  		user:
  		course:
		  photo:
  		x:
  		y:
  	}
  }
};

1. 레이아웃 만들기
2. 리다이렉션(정보교환없이)
////////////////////////////////////////////////////////////////////////////////////////////////////////
// 05.28(화)
혼동되지 않게!
파일이름 abcDef_abcDef.js
export abcDef_abcDef

App              <-class | function->
   | MainPage                           DashBoard
   | CoursePage							subcomponents...	
   | StatPage
   | ClassPage
				state사용 | state사용 X, props

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 05.29(수)

        { participants.map( (participant) => (
          <div key={participant.id} text-align='center'>
            {participant.name}, {participant.student_number}, {participant.school}, {participant.major}
          </div>
        ))}


css color list
https://material-ui.com/customization/color/#color


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 05.31(금)

mainPage / coursePage 의 state에 linkto 추가

SideBar에서 해당 course를 클릭하면 (DashBoard 컴포넌트)
onClick => LinkCourse => MainPage에서 state의 linkto 를 /course로 바꾸고 리렌더링

manage/stat/photo는 아직 바꾸지 않음

main, course 등에서 state를 변경해서 써도 되는지 의문


//////////////////////////////////////////////////////////////////////////////////////////////////////// 
// 06.13(목)
export const initialState = {
  username: "",
  password: "",
  pwconfirm: "",
  is_student: true,
  name: "",
  student_number: "",
  school: "",
  major: "",
  linkto:"",

  response: {
    success:
    message:

    user: {
      username: "", //ID
      is_student: true,
      name: "", //Name
      student_number: "",
      school: "",
      major: "",
    },
    courses: [
      {
        coursename: "",
        superuser:"",
        participants: [
          {},{},{}
        ],
      },
    ],
    //requsers: isStudent=false 인 경우에만 로드
    requsers: [
      {
        username:
        password:
        ...
      },
      {},{},
    ],
    photoes: [
      {
        coursename:
        photo:
        created:
      },
      {},{},
    ],
    //tag: isStudent=true: 본인 이름과 맞는 태그만 로드 else 모든 태그 로드
    tag: [
      {
        name:"",
        coursename:"",
        created:"",
        x:123,
        y:123,
      },
      {},{},{},
    ]
    stat: [
      {

        created:"", 
      },
      {},{},{}
    ]
  }
};

login할때 reponse를 받아와서 localStorage에 저장하고, reponse를 지우면 됨.

크게 두가지로 나누어서 생각
Main page
- login / register / main / coursesearch
Course Page
- course / tag / stat / manage

main page rendering
1. user - 당연
2. courses - 일반적으로 로그인할 때 받아오면 되지만, 코스를 추가하는 등을 헀을때 업데이트가 되어야 함 
3. photoes - 실시간 추가까지는 어려울 것 같고, 새로고침하면 re-rendering을 통해 추가가 가능해야 할 듯.

course page rendering
1. tag - tag가 달려있는지 알아야 stat 등에서 사용이 가능함
2. stat - tag를 달거나 하면 업데이트 되어야 하므로
3. requsers - manage page 들어갈 때 해야됨

현재 만들어져있는 teststor은 두가지.
MainPage 및 CoursePage.
teststor 형식과 같게 데이터를 백엔드에서 받아온 뒤에,
백엔드에서 데이터를 가져와서 teststor에 저장 혹은,
현재 상태의 teststor를 localstorage로 대체할 예정
각각에서 새로고침할 때마다 Rerendering이 가능하게.


////////////////////////////////////////////////////////////////////////////////////////////////////////
반복문, participants 에 있는 리스트를 반복함

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























////////////////////////////////////////////////////////////////////////////////////////////////////////
//course timeline test case
            <Grid className={classes.container} spacing={2} item xs={4} >
              <div className={classes.root} >
                { photoes_1.map( (photo) => (
                  <div key={photo.id} text-align='center'>
                    <Button variant="contained" color={photo.isUploaded ? (photo.isChecked ? 'primary' : 'secondary') : 'grey'}
                            className={classes.button} size='middle'>
                      {photo.created}
                      <PhotoIcon className={classes.Icon} />
                    </Button>
                  </div>
                  ))}
                </div>
            </Grid>
            <Grid className={classes.container} spacing={2} item xs={4} >
              <div className={classes.root} >
                { photoes_2.map( (photo) => (
                  <div key={photo.id}>
                    <Button variant="contained" color={photo.isUploaded ? (photo.isChecked ? 'primary' : 'secondary') : 'grey'}
                            className={classes.button} size='middle'>
                      {photo.created}
                      <PhotoIcon className={classes.Icon} />
                    </Button>
                  </div>
                  ))}
                </div>
            </Grid>
            <Grid className={classes.container} spacing={2} item xs={4} >
              <div className={classes.root}>
                { photoes_3.map( (photo) => (
                  <div key={photo.id}>
                    <Button variant="contained" color={photo.isUploaded ? (photo.isChecked ? 'primary' : 'secondary') : 'grey'}
                            className={classes.button} size='middle'>
                      {photo.created}
                      <PhotoIcon className={classes.Icon} />
                    </Button>
                  </div>
                  ))}
              </div>
            </Grid>
          </Grid>



              const photoes_1 = [
      {id: 1 , created: '03.02', isChecked: true, isUploaded: true},
      {id: 4 , created: '03.09', isChecked: true, isUploaded: true},
      {id: 7 , created: '03.16', isChecked: true, isUploaded: true},
      {id: 10 , created: '03.23', isChecked: true, isUploaded: true},
      {id: 13 , created: '04.02', isChecked: true, isUploaded: true},
      {id: 16 , created: '04.09', isChecked: true, isUploaded: true},
      {id: 19 , created: '04.16', isChecked: false, isUploaded: true},
      {id: 22 , created: '05.02', isChecked: false, isUploaded: false},
      {id: 25 , created: '05.09', isChecked: false, isUploaded: false},
      {id: 28 , created: '05.16', isChecked: false, isUploaded: false},
    ];
    const photoes_2 = [
      {id: 2 , created: '03.04', isChecked: true, isUploaded: true},
      {id: 5 , created: '03.11', isChecked: true, isUploaded: true},
      {id: 8 , created: '03.18', isChecked: true, isUploaded: true},
      {id: 11 , created: '03.25', isChecked: true, isUploaded: true},
      {id: 14 , created: '04.04', isChecked: true, isUploaded: true},
      {id: 17 , created: '04.11', isChecked: true, isUploaded: true},
      {id: 20 , created: '04.18', isChecked: false, isUploaded: true},
      {id: 23 , created: '05.04', isChecked: false, isUploaded: false},
      {id: 26 , created: '05.11', isChecked: false, isUploaded: false},
      {id: 29 , created: '05.18', isChecked: false, isUploaded: false},
    ];
    const photoes_3 = [
      {id: 3 , created: '03.06', isChecked: true, isUploaded: true},
      {id: 6 , created: '03.13', isChecked: true, isUploaded: true},
      {id: 9 , created: '03.20', isChecked: true, isUploaded: true},
      {id: 12 , created: '03.27', isChecked: true, isUploaded: true},
      {id: 15 , created: '04.06', isChecked: true, isUploaded: true},
      {id: 18 , created: '04.13', isChecked: false, isUploaded: true},
      {id: 21 , created: '04.20', isChecked: false, isUploaded: true},
      {id: 24 , created: '05.06', isChecked: false, isUploaded: false},
      {id: 27 , created: '05.13', isChecked: false, isUploaded: false},
      {id: 30 , created: '05.20', isChecked: false, isUploaded: false},
    ];
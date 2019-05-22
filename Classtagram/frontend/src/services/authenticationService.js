export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = 'http://127.0.0.1:8000/backend/register/';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

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
//backend에서 받아오기만 하는 액션이라 적어도 POST는 아닐 것 같음
//TBD
export const mainInfoService = (request) => {
  const MAININFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/username'; //username

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  };

  return fetch(MAININFO_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const logoutUserService = (request) => {
  const LOGOUT_API_ENDPOINT = 'http://127.0.0.1:8000/backend/username'; //username

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  };

  return fetch(LOGOUT_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

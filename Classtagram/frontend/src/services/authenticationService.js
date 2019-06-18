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
export const mainInfoService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const MAININFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/users/'.concat(user.user); //username

  const parameters = {
    method: 'GET',
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

export const courseInfoService = (request) => {
  const course = request;
  const COURSEINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/courses/'.concat(course); //coursenum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(COURSEINFO_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const photoPostService = (request) => {
  const PHOTOPOST_API_ENDPOINT = 'http://127.0.0.1:8000/backend/photos/';
  let formData = new FormData();
  formData.append('course',request.course);
  formData.append('photo',request.photo);
  console.log(formData.get('photo'));

  const parameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
    body: formData
  };

  return fetch(PHOTOPOST_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};


export const photoCourseInfoService = (request) => {
  const course = request;

  const PHOTOCOURSEINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/photos/course/'.concat(course); //coursenum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(PHOTOCOURSEINFO_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const photoInfoService = (request) => {
  const photo = request;
  const PHOTOINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/photos/'.concat(photo); //coursenum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(PHOTOINFO_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};


export const tagPhotoInfoService = (request) => {
  const photo = request;

  const TAGPHOTOINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/tags/photo/'.concat(photo); //photonum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(TAGPHOTOINFO_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};


export const tagPostService = (request) => {
  const TAGPOST_API_ENDPOINT = 'http://127.0.0.1:8000/backend/tags/';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  };

  return fetch(TAGPOST_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const tagPutService = (request) => {

  const TAGPOST_API_ENDPOINT = 'http://127.0.0.1:8000/backend/tags/'.concat(request.tag);

  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.info)
  };

  return fetch(TAGPOST_API_ENDPOINT, parameters)
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

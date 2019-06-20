export const registerUserService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const REGISTER_API_ENDPOINT = 'http://127.0.0.1:8000/backend/register/';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
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
  const user = JSON.parse(localStorage.getItem('user'));
  const LOGIN_API_ENDPOINT = 'http://127.0.0.1:8000/backend/login/';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
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
export const mainInfoService = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const MAININFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/users/'.concat(user.user); //username

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
    }
  };

  return fetch(MAININFO_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const userCourseInfoService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const course = request;

  const USERCOURSEINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/users/course/'.concat(course); //coursenum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
    }
  };

  return fetch(USERCOURSEINFO_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const courseInfoService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const course = request;
  const COURSEINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/courses/'.concat(course); //coursenum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
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

export const coursePutService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const COURSEPUT_API_ENDPOINT = 'http://127.0.0.1:8000/backend/courses/'.concat(request.course);

  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
    },
    body: JSON.stringify(request.info)
  };

  return fetch(COURSEPUT_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const coursePostService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const COURSEPOST_API_ENDPOINT = 'http://127.0.0.1:8000/backend/courses/';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
    },
    body: JSON.stringify(request)
  };

  return fetch(COURSEPOST_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const courseDeleteService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const course = request;
  const COURSEDELETE_API_ENDPOINT = 'http://127.0.0.1:8000/backend/courses/'.concat(course); //coursenum

  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
    }
  };

  return fetch(COURSEDELETE_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const photoPostService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const PHOTOPOST_API_ENDPOINT = 'http://127.0.0.1:8000/backend/photos/';
  let formData = new FormData();
  formData.append('course',request.course);
  formData.append('photo',request.photo);
  console.log(formData.get('photo'));

  const parameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Authorization': 'Token '.concat(user.token)
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
  const user = JSON.parse(localStorage.getItem('user'));
  const course = request;

  const PHOTOCOURSEINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/photos/course/'.concat(course); //coursenum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
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

export const photoUserInfoService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userrq = request;

  const PHOTOUSERINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/photos/user/'.concat(userrq); //coursenum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
    }
  };

  return fetch(PHOTOUSERINFO_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const photoInfoService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const photo = request;
  const PHOTOINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/photos/'.concat(photo); //coursenum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
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

export const photoDeleteService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const photo = request;
  const PHOTOINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/photos/'.concat(photo); //coursenum

  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
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
  const user = JSON.parse(localStorage.getItem('user'));
  const photo = request;

  const TAGPHOTOINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/tags/photo/'.concat(photo); //photonum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
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
  const user = JSON.parse(localStorage.getItem('user'));
  const TAGPOST_API_ENDPOINT = 'http://127.0.0.1:8000/backend/tags/';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
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
  const user = JSON.parse(localStorage.getItem('user'));
  const TAGPOST_API_ENDPOINT = 'http://127.0.0.1:8000/backend/tags/'.concat(request.tag);

  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
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

export const requestPostService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const REQUESTPOST_API_ENDPOINT = 'http://127.0.0.1:8000/backend/requests/';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
    },
    body: JSON.stringify(request)
  };

  return fetch(REQUESTPOST_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const requestDeleteService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const REQUESTDELETE_API_ENDPOINT = 'http://127.0.0.1:8000/backend/requests/'.concat(request);

  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
    }
  };

  return fetch(REQUESTDELETE_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const requestCourseInfoService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const course = request;

  const REQUESTCOURSEINFO_API_ENDPOINT = 'http://127.0.0.1:8000/backend/requests/course/'.concat(course); //photonum

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
    }
  };

  return fetch(REQUESTCOURSEINFO_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};


export const logoutUserService = (request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const LOGOUT_API_ENDPOINT = 'http://127.0.0.1:8000/backend/username'; //username

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token '.concat(user.token)
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

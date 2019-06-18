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

export const courseInfoAction = (course) => {
  return {
    type : types.COURSE_INFO,
    course
  }
}

export const photoCourseInfoAction = (course) => {
  return {
    type : types.PHOTO_COURSE_INFO,
    course
  }
}

export const photoUserInfoAction = (user) => {
  return {
    type : types.PHOTO_USER_INFO,
    user
  }
}

export const photoInfoAction = (photo) => {
  return {
    type : types.PHOTO_INFO,
    photo
  }
}

export const photoPostAction = (course, file) => {
  return {
    type : types.PHOTO_POST,
    photo : {
      course : course.id,
      photo : file
    },
  }
}

export const tagPostAction = (user, course, photo, x, y) => {
  return {
    type : types.TAG_POST,
    tag : {
      user : user.id,
      course : course.id,
      photo : photo.id,
      x,
      y
    },
  }
}

export const tagPutAction = (tag, user, course, photo, x, y) => {
  return {
    type : types.TAG_PUT,
    tag,
    info : {
      user : user.id,
      course : course.id,
      photo : photo.id,
      x,
      y
    },
  }
}

export const tagPhotoInfoAction = (photo) => {
  return {
    type : types.TAG_PHOTO_INFO,
    photo
  }
}

export const logoutUserAction = (user) => {
  return {
    type: types.LOGOUT_USER,
    user
  }
};
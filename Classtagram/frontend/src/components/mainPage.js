import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUserAction, mainInfoAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from './customStylesMui.js';
import './Styles.css';

export const initialState = {
  username: "",
  password: "",
  pwconfirm: "",
  is_student: true,
  name: "",
  student_number: "",
  school: "",
  major: "",
  updated: false
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.state.username = localStorage.getItem('user').username;
    this.props.dispatch(mainInfoAction(this.state.username));

  }
  render() {
    let isSuccess, message;
    const user = JSON.parse(localStorage.getItem('user'))
    const onHandleLogout = () => {
      // 비밀번호와 비밀번호 확인이 일치하면 회원 정보를 POST 한다.
      // registerUserAction을 dispatch하면
      // 이를 watchers.js의 watchRegisterAuthentication() watcher가 감지합니다.
      
      this.props.dispatch(logoutUserAction(this.state));
    }

    // if (this.props.response.main.hasOwnProperty('response')) {
    //   isSuccess = this.props.response.main.response.success;
    //   message = this.props.response.main.response.message;
    // }

    return (
      <div>
       <div className="header">
          Classtagram
        </div>
        <h3 style={{ textAlign: "center" }}>
         {user.username}'s mainpage
        </h3>
        <ul>
         <div>username: {user.username}</div>
         <div>is_student: {user.is_student}</div>
         <div>name: {user.name}</div>
         <div>student_number: {user.student_number}</div>
         <div>school: {user.school}</div>
         <div>major: {user.major}</div>
        </ul>
        <div style={{ textAlign: "center" }}>
         <Button variant="contained" type="button" onClick={onHandleLogout}>
           Logout
         </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(MainPage);
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

    const onHandleLogout = () => {
      // 비밀번호와 비밀번호 확인이 일치하면 회원 정보를 POST 한다.
      // registerUserAction을 dispatch하면
      // 이를 watchers.js의 watchRegisterAuthentication() watcher가 감지합니다.
      
      this.props.dispatch(logoutUserAction(this.state));
    }

    if (this.props.response.main.hasOwnProperty('response')) {
      isSuccess = this.props.response.main.response.success;
      message = this.props.response.main.response.message;
    }

    return (
      <div>
       <div className="header">
          Classtagram
        </div>
        <h3 style={{ textAlign: "center" }}>
         {localStorage.getItem('user').username}'s main page.
        </h3>
        <ul>
         <div>username: {this.state.username}</div>
         <div>is_student: {this.state.is_student}</div>
         <div>name: {this.state.name}</div>
         <div>student_number: {this.state.student_number}</div>
         <div>school: {this.state.school}</div>
         <div>major: {this.state.major}</div>
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
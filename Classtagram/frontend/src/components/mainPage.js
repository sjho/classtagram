import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUserAction, mainInfoAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from './customStylesMui.js';
import { Timeline, Event } from "react-timeline-scribble";
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
        <div className="header_main">
          Classtagram
        </div>
        <Button variant="contained" type="button" onClick={onHandleLogout}>
           Logout
        </Button>
      <Fragment>
        <h2>
          {user.username}'s mainpage
        </h2>
        <Timeline>
          <Event interval={"03.02"} title={"SWPP"}>
            username: {user.username}
          </Event>
          <Event interval={"03.07"} title={"SWPP"}>
            name: {user.name}
          </Event>
          <Event interval={"03.12"} title={"SWPP"}>
            student_number: {user.student_number}
          </Event>
          <Event interval={"03.17"} title={"SWPP"}>
            school: {user.school}
          </Event>
          <Event interval={"03.22"} title={"SWPP"}>
            major: {user.major}
          </Event>
        </Timeline>
      </Fragment>

      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(MainPage);
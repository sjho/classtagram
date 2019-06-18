import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUserAction, mainInfoAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from './customStylesMui.js';

import MainDashBoard from "./subcomponents/mainDashBoard";

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
  updated: false,
  linkto: "",
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.state.username = localStorage.getItem('user').username;
    this.props.dispatch(mainInfoAction(this.state.username));
  }


  render() {
    let data;

  
    if (this.props.response.main.hasOwnProperty('response')) {
      data = this.props.response.main.response;
    }

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
    const LinkMain = () => {
      this.setState({
        linkto : '/main'
      })
    };
    const LinkCourse = (courseid) => {
      
      //coursename이 정상적으로 들어옴 -> 백엔드에 Coursename 전달 후 reponse를 받으면 될 것.
      localStorage.setItem('course', courseid);
      this.setState({
        linkto : '/course'
      })
    };
    const LinkManage = (coursename) => {
      this.setState({
        linkto : '/manage'
      })
    };
    const LinkPhoto = (coursename, created) => {
      this.setState({
        linkto : '/photo'
      })
    };
    const LinkStat = (coursename) => {
      this.setState({
        linkto : '/stat'
      })
    };
    const LinkCreate = () => {
      this.setState({
        linkto: '/create'
      })
    }
    switch(this.state.linkto) {
      case '/course':
        return (<Redirect to= '/course' />);
      case '/manage':
        return (<Redirect to= '/manage' />);
      case '/photo':
        return (<Redirect to= '/photo' />);
      case '/stat':
        return (<Redirect to= '/stat' />);
      case '/create':
        return (<Redirect to= '/create' />);        
      default:
        return (
          <div>
            <MainDashBoard
              data = {data}
              onLinkMain = {() => LinkMain()}
              onLinkCourse = {(e) => LinkCourse(e)}
              onLinkManage = {(e) => LinkManage(e)}
              onLinkPhoto = {(e) => LinkPhoto(e)}
              onLinkStat = {(e) => LinkStat(e)}
              onLinkCreate = {() => LinkCreate()}
            />
          </div> 
        );
    }
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(MainPage);
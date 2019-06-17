import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUserAction, mainInfoAction, courseInfoAction, photoInfoAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from './customStylesMui.js';

import PhotoDashBoard from "./subcomponents/photoDashBoard";

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

class PhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.state.username = localStorage.getItem('user').username;
    this.state.courseid = localStorage.getItem('course');
    this.state.photoid = localStorage.getItem('photo');
    console.log(this.state.photoid);
    this.props.dispatch(mainInfoAction(this.state.username));
    this.props.dispatch(courseInfoAction(this.state.courseid));
    this.props.dispatch(photoInfoAction(this.state.photoid));
  }
  render() {
    let data, course, photo;

    console.log(this.props.response);
    if (this.props.response.main.hasOwnProperty('response')) {
      data = this.props.response.main.response;
    }

    if (this.props.response.course.hasOwnProperty('response')) {
      course = this.props.response.course.response;
      console.log(course);
    }

    if (this.props.response.photo.hasOwnProperty('response')) {
      photo = this.props.response.photo.response;
      console.log(photo);
    }

    let linkto = "";
    const LinkMain = () => {
      this.setState({
        linkto : '/main'
      })
//      console.log("LinkMain Worked")
    };
    const LinkCourse = (courseid) => {
      
      //coursename이 정상적으로 들어옴 -> 백엔드에 Coursename 전달 후 reponse를 받으면 될 것.
      localStorage.setItem('course', courseid);
      console.log(courseid);
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
      case '/main':
        return (<Redirect to= '/main' />);
      case '/stat':
        return (<Redirect to= '/stat' />);
      default:
        return (
          <div>
            <PhotoDashBoard
              data = {data}
              course = {course}
              photo = {photo}
              onLinkMain = {LinkMain}
              onLinkCourse = {(e) => LinkCourse(e)}
              onLinkManage = {(e) => LinkManage(e)}
              onLinkPhoto = {(e) => LinkPhoto(e)}
              onLinkStat = {(e) => LinkStat(e)}
            />
          </div> 
        );
    }
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(PhotoPage);
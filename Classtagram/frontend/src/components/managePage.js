import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUserAction, mainInfoAction, courseInfoAction, requestCourseInfoAction, userCourseInfoAction, requestDeleteAction, coursePutAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from './customStylesMui.js';

import ManageDashBoard from "./subcomponents/manageDashBoard";

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

class ManagePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.state.courseid = localStorage.getItem('course');

    this.props.dispatch(mainInfoAction());
    this.props.dispatch(courseInfoAction(this.state.courseid));
    this.props.dispatch(requestCourseInfoAction(this.state.courseid));
    this.props.dispatch(userCourseInfoAction(this.state.courseid));
  }
  render() {
    let data, course, request, courseuser;

  
    if (this.props.response.main.hasOwnProperty('response')) {
      data = this.props.response.main.response;
    }

    if (this.props.response.course.hasOwnProperty('response')) {
      course = this.props.response.course.response;
    }

    if (this.props.response.requestcourse.hasOwnProperty('response')) {
      request = this.props.response.requestcourse.response;
    }

    if (this.props.response.usercourse.hasOwnProperty('response')) {
      courseuser = this.props.response.usercourse.response;
    }

    if (this.props.response.requestdelete.hasOwnProperty('response')) {
      this.props.dispatch(mainInfoAction());
      this.props.dispatch(courseInfoAction(this.state.courseid));
      this.props.dispatch(requestCourseInfoAction(this.state.courseid));
      this.props.dispatch(userCourseInfoAction(this.state.courseid));

      this.props.response.requestdelete = {};
    }

    if (this.props.response.courseput.hasOwnProperty('response')) {
      this.props.dispatch(mainInfoAction());
      this.props.dispatch(courseInfoAction(this.state.courseid));
      this.props.dispatch(requestCourseInfoAction(this.state.courseid));
      this.props.dispatch(userCourseInfoAction(this.state.courseid));

      this.props.response.courseput = {};
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
    const RequestAdd = (request, user) => {
      this.props.dispatch(requestDeleteAction(request.id));
      course.users.push(user.id)
      this.props.dispatch(coursePutAction(course.id, course));
    }
    const RequestDelete = (request) => {
      console.log(request);
      this.props.dispatch(requestDeleteAction(request));
    }
    switch(this.state.linkto) {
      case '/course':
        return (<Redirect to= '/course' />);
      case '/main':
        return (<Redirect to= '/main' />);
      case '/photo':
        return (<Redirect to= '/photo' />);
      case '/stat':
        return (<Redirect to= '/stat' />);
      default:
        return (
          <div>
            <ManageDashBoard
              data = {data}
              course = {course}
              request = {request}
              courseuser = {courseuser}
              onLinkMain = {LinkMain}
              onLinkCourse = {(e) => LinkCourse(e)}
              onLinkManage = {(e) => LinkManage(e)}
              onLinkPhoto = {(e) => LinkPhoto(e)}
              onLinkStat = {(e) => LinkStat(e)}
              onRequestAdd = {(e1, e2) => RequestAdd(e1, e2)}
              onRequestDelete = {(e) => RequestDelete(e)}
            />
          </div> 
        );
    }

  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(ManagePage);
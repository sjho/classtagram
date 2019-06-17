import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUserAction, mainInfoAction, courseInfoAction, photoPostAction, photoCourseInfoAction} from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from './customStylesMui.js';

import CourseDashBoard from "./subcomponents/courseDashBoard";

import './Styles.css';

export const initialState = {
  username: "",
  courseid: "",
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

class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.state.username = localStorage.getItem('user').username;
    this.state.courseid = localStorage.getItem('course');
    this.props.dispatch(mainInfoAction(this.state.username));
    this.props.dispatch(courseInfoAction(this.state.courseid));
    this.props.dispatch(photoCourseInfoAction(this.state.courseid));
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

    if (this.props.response.photocourse.hasOwnProperty('response')) {
      photo = this.props.response.photocourse.response;
      console.log(photo);
    }

    if (this.state.hasOwnProperty('imagePreviewUrl') && this.state.imagePreviewUrl != undefined) {
      this.props.dispatch(photoPostAction(course, this.state.file));
      this.setState({ file: undefined, imagePreviewUrl: undefined });
      console.log(this.state);
    }

    if (this.props.response.photopost.hasOwnProperty('response')) {
      this.props.dispatch(photoCourseInfoAction(this.state.courseid));
      this.props.response.photopost = undefined;
      console.log(photo);
    }

    const LinkMain = () => {
      this.setState({
        linkto : '/main'
      })
//      console.log("LinkMain Worked")
    };
    const LinkCourse = (courseid) => {
      localStorage.setItem('course', courseid);
      this.setState({'courseid' : courseid});
      this.props.response.course = undefined;
      this.props.response.photocourse = undefined;
      this.props.dispatch(courseInfoAction(courseid));
      this.props.dispatch(photoCourseInfoAction(courseid));
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
    const LinkPhoto = (photoid) => {
      localStorage.setItem('photo', photoid);
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
    const PhotoUpload = (e) => {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({ file: file, imagePreviewUrl: reader.result });
      };
      reader.readAsDataURL(file);
    };
    
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    switch(this.state.linkto) {
      case '/main':
        return (<Redirect to= '/main' />);
      case '/manage':
        return (<Redirect to= '/manage' />);
      case '/photo':
        return (<Redirect to= '/photo' />);
      case '/stat':
        return (<Redirect to= '/stat' />);
      default:
        return (
          <div>
            <CourseDashBoard
              data = {data}
              course = {course}
              photo = {photo}
              onLinkMain = {LinkMain}
              onLinkCourse = {(e) => LinkCourse(e)}
              onLinkManage = {(e) => LinkManage(e)}
              onLinkPhoto = {(e) => LinkPhoto(e)}
              onLinkStat = {(e) => LinkStat(e)}
              onUpload = {(e) => PhotoUpload(e)}
            />
          </div> 
        );
    }
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(CoursePage);
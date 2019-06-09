import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//import { logoutUserAction, mainInfoAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from './customStylesMui.js';

import CourseDashBoard from "./subcomponents/courseDashBoard";

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

class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  render() {

    const LinkMain = () => {
      this.setState({
        linkto : '/main'
      })
//      console.log("LinkMain Worked")
    };
    const LinkCourse = () => {
      this.setState({
        linkto : '/course'
      })
    };
    const LinkManage = () => {
      this.setState({
        linkto : '/manage'
      })
    };
    const LinkPhoto = () => {
      this.setState({
        linkto : '/photo'
      })
    };
    const LinkStat = () => {
      this.setState({
        linkto : '/stat'
      })
    };
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
              onLinkMain = {LinkMain}
              onLinkCourse = {LinkCourse}
              onLinkManage = {LinkManage}
              onLinkPhoto = {LinkPhoto}
              onLinkStat = {LinkStat}
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
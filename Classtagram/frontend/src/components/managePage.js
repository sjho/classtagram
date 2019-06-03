import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//import { logoutUserAction, mainInfoAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from './customStylesMui.js';

import ManageDashBoard from "./subcomponents/manageDashBoard";

import './Styles.css';

// export const initialState = {
//   username: "",
//   password: "",
//   pwconfirm: "",
//   is_student: true,
//   name: "",
//   student_number: "",
//   school: "",
//   major: "",
//   updated: false
// };

class ManagePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    let linkto = "";
    const onLinkMain = () => {
      linkto = '/main';
    }    
    const onLinkCourse = () => {
      linkto = '/course';
    }
    const onLinkManage = () => {
      linkto = '/manage';
    }
    const onLinkPhoto = () => {
      linkto = '/photo';
    }
    const onLinkStat = () => {
      linkto = '/stat';
    }
    switch(linkto) {
      case '/main':
        return (<Redirect to= '/main' />);
      case '/course':
        return (<Redirect to= '/course' />);
      case '/manage':
        return (<Redirect to= '/manage' />);
      case '/photo':
        return (<Redirect to= '/photo' />);
      case '/stat':
        return (<Redirect to= '/stat' />);
      default:
        return (
          <div>
            <ManageDashBoard />
          </div> 
        );
    }
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(ManagePage);
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { styles } from "./customStylesMui";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let stuID = event.target.stuID.value;
    let password = event.target.password.value;

    const data = {
      stuID, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  render() {

    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;
      
      if (isSuccess) {
        setCookie('token', this.props.response.login.response.token, 1);
      }
    }

    return (
      <div>
        <h3 style={{ textAlign: "center" }}>
          Login with your Email address or Username
        </h3>
        {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
        <form onSubmit={this.onHandleLogin}>
          <div style={{ textAlign: "center" }}>
            <TextField  placeholder="stuID" type="stuID" name="stuID" />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField placeholder="password" type="password" name="password" />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button variant="raised" type="button">
              Login
            </Button>
          </div>
        </form>
        <div style={{ textAlign: "center" }}>
          Don't have account?
          <Link  to='register'>Login here</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);
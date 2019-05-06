import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { styles } from "./customStylesMui";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


class RegisterPage extends Component {
  onHandleRegistration = (event) => {
    event.preventDefault();

    let stuID = event.target.stuID.value;
    let name = event.target.name.value;
    let password = event.target.password.value;
    let pwconfirm = event.target.pwconfirm.value;
    let school = event.target.school.value;
    let major = event.target.major.value;

    const data = {
      stuID, name, password, pwconfirm, school, major
    };

    this.props.dispatch(registerUserAction(data));
  }

  render() {
    let message, isSuccess;

    if (this.props.response.register.hasOwnProperty('response')) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }
    
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>
          Register Form
        </h3>
        {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
        <form onSubmit={this.onHandleLogin}>
          <div style={{ textAlign: "center" }}>
            <TextField  placeholder="stuID" type="stuID" name="stuID" />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField placeholder="name" type="name" name="name" />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField placeholder="password" type="password" name="password" />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField placeholder="pwconfirm" type="pwconfirm" name="pwconfirm" />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField placeholder="school" type="school" name="school" />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField placeholder="major" type="major" name="major" />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button variant="raised" type="button">
              Login
            </Button>
          </div>
        </form>
        <div style={{ textAlign: "center" }}>
          Already have account?
          <Link  to='login'>Login here</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(RegisterPage);

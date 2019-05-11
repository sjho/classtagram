import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { styles } from "./customStylesMui";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// 처음 회원가입 정보 저장
const initialState = {
  username: "",
  password: "",
  pwconfirm: "",
  is_student: true,
  name: "",
  student_number: "",
  school: "",
  major: ""
};

export class RegisterPage extends Component {
  // 회원가입 정보 초기화
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    let message, isSuccess;
    
    // 회원가입 버튼을 눌렀을 때 실행되는 이벤트
    const onHandleRegistration = () => {
      // 비밀번호와 비밀번호 확인이 일치하면 회원 정보를 POST 한다.
      // registerUserAction을 dispatch하면
      // 이를 watchers.js의 watchRegisterAuthentication() watcher가 감지합니다.
      if (this.state.password == this.state.pwconfirm)
        this.props.dispatch(registerUserAction({
          username: this.state.username,
          password: this.state.password,
          is_student: this.state.is_student,
          name: this.state.name,
          student_number: this.state.student_number,
          school: this.state.school,
          major: this.state.major
        }));
    }


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
            <TextField
              placeholder="ID"
              type="username"
              name="username"
              value={this.state.username}
              // 해당 Textfield의 값이 바뀌면 바로 현재 클래스의 state에 반영됩니다.
              onChange={e => this.setState({ username: e.target.value })}
              />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField
              placeholder="password" 
              type="password" 
              name="password" 
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField
              placeholder="pwconfirm"
              type="password"
              name="pwconfirm"
              value={this.state.pwconfirm}
              onChange={e => this.setState({ pwconfirm: e.target.value })}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField
              placeholder="name"
              type="name"
              name="name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField 
              placeholder="stuID"
              type="student_number"
              name="student_number"
              value={this.state.student_number}
              onChange={e => this.setState({ student_number: e.target.value })}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField
              placeholder="school"
              type="school" 
              name="school" 
              value={this.state.school}
              onChange={e => this.setState({ school: e.target.value })}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <TextField 
              placeholder="major" 
              type="major" 
              name="major" 
              value={this.state.major}
              onChange={e => this.setState({ major: e.target.value })}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button variant="contained" type="button" onClick={onHandleRegistration}>
              Sign up
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

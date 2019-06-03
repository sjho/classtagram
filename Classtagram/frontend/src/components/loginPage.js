import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from './customStylesMui.js';
import './Styles.css';

// 처음 로그인 정보 저장
export const initialState = {
  username: "",
  password: ""
};

class LoginPage extends Component {
  // 로그인 정보 초기화
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    let isSuccess, message;

    // 로그인 버튼을 눌렀을 때 실행되는 이벤트
    const onHandleLogin = () => {
      // username과 password를 보내 로그인 백엔드에 GET명령을 보낸다.
      // loginUserAction을 dispatch하면
      // 이를 watchers.js의 watchLoginAuthentication() watcher가 감지합니다.
        this.props.dispatch(loginUserAction({
          username: this.state.username,
          password: this.state.password
        }));
    }

    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;  
      message = this.props.response.login.response.message;
      
      if (isSuccess) {
        setCookie('token', this.props.response.login.response.token, 1);
      }
    }

    return (
      <div>
        <div className="header">
          Classtagram
        </div>
        <h3 style={{ textAlign: "center" }}>
          Login with your Email address or Username
        </h3>
        {!isSuccess ? <div>{message}</div> : <Redirect to= '/main' />}
        <form onSubmit={this.onHandleLogin}>
          <div style={{ textAlign: "center" }}>
            <TextField
              placeholder="ID"
              type="username"
              name="username"
              value={this.state.username}
              // 해당 Textfield의 값이 바뀌면 바로 현재 클래스의 state에 반영됩니다.
              onChange={e => this.setState({ username: e.target.value })} />
          </div>
          <div style={{ textAlign: "center" }} >
          <TextField
              margin = 'dense'
              placeholder="password"
              type="password"
              name="password"
              value={this.state.password}
              // 해당 Textfield의 값이 바뀌면 바로 현재 클래스의 state에 반영됩니다.
              onChange={e => this.setState({ password: e.target.value })} />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button variant="contained" type="button" onClick={onHandleLogin}>
              Login
            </Button>
          </div>
        </form>
        <div style={{ textAlign: "center" }} >
          Don't have account?
          <Link  to='register'>Register here</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);
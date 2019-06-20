import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUserAction, mainInfoAction, courseInfoAction, photoInfoAction, tagPostAction, tagPhotoInfoAction, tagPutAction, photoDeleteAction } from '../actions/authenticationActions';
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

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
}

class PhotoPage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.state.username = localStorage.getItem('user').username;
    this.state.courseid = localStorage.getItem('course');
    this.state.photoid = localStorage.getItem('photo');
    
    this.props.dispatch(mainInfoAction(this.state.username));
    this.props.dispatch(courseInfoAction(this.state.courseid));
    this.props.dispatch(photoInfoAction(this.state.photoid));
    this.props.dispatch(tagPhotoInfoAction(this.state.photoid));
  }

  componentDidUpdate() {
    let url = "";
    if (this.props.response.photo.response != undefined) {
      url = "http://127.0.0.1:8000";
      url = url.concat(this.props.response.photo.response.photo);
    }

    if (document.getElementById('sample') != null){
      const canvas = document.getElementById('sample');
      const ctx = canvas.getContext('2d');

      var user, course, photo, props;
      
      props = this;

      let img = new Image;
      
      img.onload = function() {
        canvas.width = this.width;
        canvas.height = this.height;
        ctx.drawImage(this, 0, 0);
        var tags = props.props.response.tagphoto.response;
        var user = props.props.response.main.response;
        if (tags != undefined) {
          var i=0;
          for (i=0; i<tags.length; i++){
            ctx.beginPath();
            ctx.arc(tags[i].x, tags[i].y, 3, 0, Math.PI * 2, true);
            if (tags[i].user.id == user.id) ctx.fillStyle = 'green';
            else ctx.fillStyle = 'blue';
            ctx.fill();

            ctx.beginPath();
            ctx.font = "15px Arial";
            ctx.fillText(tags[i].user.username, tags[i].x + 10, tags[i].y + 3);
          }
        }
      };

      img.src = url;

      let canvasclick = function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        /**ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 3, 0, Math.PI * 2, true);
        ctx.fillStyle = 'green';
        ctx.fill();**/

        user = props.props.response.main.response;
        course = props.props.response.course.response;
        photo = props.props.response.photo.response;

        if (user != undefined && course != undefined && photo != undefined){
          var tags = props.props.response.tagphoto.response;
          var k = undefined;
          for (var i=0; i<tags.length; i++){
            if (tags[i].user.id == user.id){
              k = tags[i];
            } 
          }
          if (k == undefined) props.props.dispatch(tagPostAction(user, course, photo, mousePos.x, mousePos.y));
          else props.props.dispatch(tagPutAction(k.id, user, course, photo, mousePos.x, mousePos.y));
        }
      }

      user = props.props.response.main.response;
      course = props.props.response.course.response;
      if (user != undefined && course != undefined && course.superuser != user.id){
        canvas.removeEventListener('click', canvasclick);
        canvas.addEventListener('click', canvasclick, false);
      }
    }
  }

  render() {
    let data, course, photo;

    this.props.dispatch(tagPhotoInfoAction(this.state.photoid));

    if (this.props.response.main.hasOwnProperty('response')) {
      data = this.props.response.main.response;
    }

    if (this.props.response.course.hasOwnProperty('response')) {
      course = this.props.response.course.response;
    }

    if (this.props.response.photo.hasOwnProperty('response')) {
      photo = this.props.response.photo.response;
    }

    if (this.props.response.photodelete.hasOwnProperty('response')) {
      this.props.dispatch(mainInfoAction(this.state.username));
      this.props.dispatch(courseInfoAction(this.state.courseid));
      this.setState({
        linkto : '/course'
      })
      this.props.response.photodelete = {};
    }

    let linkto = "";
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
    const Delete = (photo) => {
      this.props.dispatch(photoDeleteAction(photo.id));
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
              onDelete = {(e) => Delete(e)}
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
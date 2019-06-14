import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCookie } from '../../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from '../customStylesMui.js';

import { Timeline, Event } from "react-timeline-scribble";


export default function Main_timeLine({
  teststor,
  onLinkPhoto_timeLine,
}) {
  console.log(teststor);
    return (

      <div>
        <Fragment>
          <h2>
            TimeLine
          </h2>
          <Timeline>
            {teststor.photoes.map( (item) => (
              <div>
                <Event interval={item.created} title={item.coursename}>
                  <Link onClick = {() => onLinkPhoto_timeLine(item.coursename, item.created)}>{item.photo}</Link>
                </Event>
              </div>             
            ))}
          </Timeline>
        </Fragment>
      </div>
    );
}

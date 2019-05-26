import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCookie } from '../../utils/cookies';
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { styles } from '../customStylesMui.js';

import { Timeline, Event } from "react-timeline-scribble";


class Main_timeLine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<Fragment>
       		<h2>
         		1111
        	</h2>
        	<Timeline>
          		<Event interval={"03.02"} title={"SWPP"}>
            		222
          		</Event>
          		<Event interval={"03.07"} title={"SWPP"}>
            		333
          		</Event>
          		<Event interval={"03.12"} title={"SWPP"}>
            		444
          		</Event>
          		<Event interval={"03.17"} title={"SWPP"}>
            		555
          		</Event>
          		<Event interval={"03.22"} title={"SWPP"}>
            		666
          		</Event>
              <Event interval={"03.02"} title={"SWPP"}>
                222
              </Event>
              <Event interval={"03.07"} title={"SWPP"}>
                333
              </Event>
              <Event interval={"03.12"} title={"SWPP"}>
                444
              </Event>
              <Event interval={"03.17"} title={"SWPP"}>
                555
              </Event>
              <Event interval={"03.22"} title={"SWPP"}>
                666
              </Event>
        	</Timeline>
      	</Fragment>
      </div>
    );
  }
}

export default Main_timeLine;
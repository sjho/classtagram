import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon';
// import AddIcon from '@material-ui/icons/Add';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.spacing(1),
  },
}));


export default function Course_stat() {
  const classes = useStyles();
  // const classes = useStyles();
  // const isStudent = true;//props.props.isStudent
  return (
    <div>
      <h2 >Statistics</h2>
      <Divider className = {classes.divider}  />
        <h4> March </h4>
      <Divider className = {classes.divider} />
        <h4> April </h4>
      <Divider className = {classes.divider} />
        <h4> May </h4>
      <Divider className = {classes.divider} />
        <h4> June </h4>
      <Divider className = {classes.divider} />
    </div>
    );
}
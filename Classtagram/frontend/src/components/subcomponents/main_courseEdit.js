import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    alignItems: 'center',
    display: 'flex',
    width: '300',
  },
  Icon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'flex',
    margin: theme.spacing(1),
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
}));


export default function Main_CourseEdit() {
  const classes = useStyles();
  const isStudent = true;//props.props.isStudent
  return (
    <div>
      <Button disabled={isStudent} variant="contained" color="primary" className={classes.button}>
        Create Course  
        <AddIcon className={classes.Icon} />
      </Button>
      <Paper className={classes.root}>
        <SearchIcon className={classes.Icon} />
        <InputBase className={classes.input} placeholder="Search..." />
      </Paper>
    </div>
    );
}
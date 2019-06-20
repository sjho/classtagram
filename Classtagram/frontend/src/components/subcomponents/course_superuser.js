import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Button from '@material-ui/core/Button';
// import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
// import Icon from '@material-ui/core/Icon';
// import AddIcon from '@material-ui/icons/Add';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3),
    alignItems: 'center',
    display: 'flex',
    width: 200,
  },
  divider: {
    marginTop: theme.spacing(1),
  },
}));


export default function Course_superuser({
	teststor,
	onLinkManage_superuser,
	onDelete_superuser,
}) {
  const classes = useStyles();
  // const classes = useStyles();
  // const isStudent = true;//props.props.isStudent
  return (
    <div>
        <Button variant="contained" color='primary'
                 className={classes.button} size='large' onClick={() => onLinkManage_superuser(teststor.course.coursename)}>
          Manage
        </Button>
        <Button variant="contained" color='secondary'
                 className={classes.button} size='large' onClick={() => onDelete_superuser(teststor.course.id)}>
          Delete
        </Button>        
    </div>
    );
}
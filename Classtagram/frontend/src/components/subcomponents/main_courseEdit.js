import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import DirectionsIcon from '@material-ui/icons/Directions';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.spacing(1),
  },
  ss : {
    marginTop : 10,
    padding : '2px 4px',
    width : 250
  },
  button: {
    marginTop : 10,
    alignItems: 'center',
    display: 'flex',
    width: 250,
  },
  root: {
    marginTop : 10,
    marginBottom : 10,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
  },
  input: {
    marginLeft: 8,
    width: 150,
    flex: 1,
  },
  input2 : {
    margin : 5,
    width: 225
  },
  iconButton: {
    padding: 10,
  },
}));


export default function Main_courseEdit({
  teststor,
  onEdit,
  onLinkCreate
}) {
  const classes = useStyles();
  let coursecode, coursename;

  const onHandleSubmit = () => {
    onEdit(coursecode);
    coursecode = "";
  }
  const onCourseSubmit = () => {
    onLinkCreate(coursename);
    coursename = "";
  }
  const onHandleChange = (e) => {
    coursecode = e.target.value;
  }
  const onCourseChange = (e) => {
    coursename = e.target.value;
  }
  return (
    <div style={{ textAlign: "center" }}>
        <h3>{'Send Course Request'}</h3>
      <Paper className={classes.root} fullWidth>
        <form>
          <IconButton className={classes.iconButton} aria-label="Search">
            <AddIcon onClick = {() => onHandleSubmit()} />
          </IconButton>
          <InputBase className={classes.input}
            placeholder="Course Code"
            value={coursecode}
            onChange = {(e) => onHandleChange(e)}
          />
        </form>
      </Paper>
      {
        !teststor.user.is_student ?
      <div>
        <Divider className = {classes.divider}  />
        <h3>{'Making Course'}</h3>
        <Paper className={classes.ss} fullWidth>
            <InputBase className={classes.input2}
              placeholder="Course Name"
              value={coursename}
              onChange={(e) => onCourseChange(e)}
            />
        </Paper>

        <Button variant="contained" color='primary'
          className={classes.button} size='large'
          onClick={() => onCourseSubmit()}>
            Making Course
        </Button>  
        </div>
        :
        ""
      } 
    </div>
  );
}


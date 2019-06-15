import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import DirectionsIcon from '@material-ui/icons/Directions';


const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
  },
  input: {
    marginLeft: 8,
    width: 200,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});


export default function Main_courseEdit({
  onEdit,
}) {
  const classes = useStyles();
  let coursecode;

  const onHandleSubmit = () => {
    //console.log(coursecode);
    onEdit(coursecode);
    coursecode = "";
  }
  const onHandleChange = (e) => {
    //console.log("111");
    coursecode = e.target.value;
  }
  return (
    <div>
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
    </div>
  );
}


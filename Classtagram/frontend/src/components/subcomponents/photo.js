import React, {useRef} from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 600,
    width: 800,
  },
}));


export default function Photo({
  teststor,
  onDelete
}) {
  const classes = useStyles();
  const inputRef = useRef(null);
  // const classes = useStyles();
  // const isStudent = true;//props.props.isStudent

  let url = "";
  if (teststor.photo != undefined) {
    url = "http://127.0.0.1:8000";
    url = url.concat(teststor.photo.photo);
  }

  return (
    <div>
      <h2>{teststor.photo != undefined ? teststor.photo.created.substring(0, 10) : 'Loading'}</h2>
      <Paper className = {classes.paper}>
        <div>
            {<canvas id={'sample'} width={640} height={425}/>}
        </div>
        {teststor.user.id == teststor.course.superuser?<div>
        <Button variant="contained" color='secondary'
                 className={classes.button} size='large' onClick = {() => onDelete(teststor.photo)}>
          Delete
        </Button> 
        </div>:""}
      </Paper>
    </div>
    );
}
/**let ctx = this.refs.canvas;
  let img = new Image;
  
  img.onload = function() {
    ctx.drawImage(this, -200, -200, 800, 800);
    ctx.drawImage(this, 0, 0);
  };

  img.src = url; */
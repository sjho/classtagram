import React, { Fragment } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import PhotoIcon from '@material-ui/icons/Photo';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    alignItems: 'center',
    display: 'flex',
  },
  Icon: {
    margin: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  root: {
    padding: '2px 2px',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    backgroundColor: 'white',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

// function Course_TimeLine_Button(photo) {
//   const classes = useStyles();
//   return (
//       <Button variant="contained" color={photo.isChecked ? 'primary' : 'secondary'} className={classes.button} size='middle'>
//         {photo.created}
//         <PhotoIcon className={classes.Icon} />
//       </Button>
//   );
// }

export default function Course_TimeLine({
  teststor,
  onLinkPhoto_timeline,
  onUpload_timeline,
}) {
    const classes = useStyles();
    console.log(teststor);
    return (
      <Grid container spacing={2}>
        {teststor.photoes.map( (photo) => (
          <div>
            {photo.coursename != "" ?
              <Button variant="contained" color={(teststor.user.id == teststor.course.superuser) || (photo.is_checked) ? 'primary' : 'secondary'}
                       className={classes.button} size='middle' onClick={() => onLinkPhoto_timeline(photo.id)}>
                {photo.created.substring(0, 10)}
                <PhotoIcon className={classes.Icon} />
              </Button>
              :
              <Button variant="contained" component="label" className= {classes.button}
                        size='middle' color = 'grey'>
                {photo.created}
                <AddIcon className={classes.Icon} />
                <input type="file" style={{ display: "none" }} onChange = {(e) => onUpload_timeline(e)} />
              </Button>
            }
          </div>
        ))}
      </Grid>
    );
}



      // <div>
      //   <Fragment>
      //     <h2>
      //       Classes
      //     </h2>
      //       <div>
      //         <Button variant="contained" color={isChecked ? 'primary' : 'secondary'} className={classes.button} size='large'>
      //           03.02
      //           <PhotoIcon className={classes.Icon} />
      //         </Button>
      //       </div>
      //       <Button variant="contained" color="primary" className={classes.button} size='large'>
      //         03.07
      //         <PhotoIcon className={classes.Icon} />
      //       </Button>
      //       <Button variant="contained" color="primary" className={classes.button} size='large'>
      //         03.12
      //         <PhotoIcon className={classes.Icon} />
      //       </Button>
      //       <Button variant="contained" color="primary" className={classes.button} size='large'>
      //         03.17
      //         <PhotoIcon className={classes.Icon} />
      //       </Button>
      //   </Fragment>
      // </div>
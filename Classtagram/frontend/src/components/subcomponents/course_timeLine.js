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

export default function Course_TimeLine(props) {
    const classes = useStyles();
    const photoes_1 = [
      {id: 1 , created: '03.02', isChecked: true, isUploaded: true},
      {id: 4 , created: '03.09', isChecked: true, isUploaded: true},
      {id: 7 , created: '03.16', isChecked: true, isUploaded: true},
      {id: 10 , created: '03.23', isChecked: true, isUploaded: true},
      {id: 13 , created: '04.02', isChecked: true, isUploaded: true},
      {id: 16 , created: '04.09', isChecked: true, isUploaded: true},
      {id: 19 , created: '04.16', isChecked: false, isUploaded: true},
      {id: 22 , created: '05.02', isChecked: false, isUploaded: false},
      {id: 25 , created: '05.09', isChecked: false, isUploaded: false},
      {id: 28 , created: '05.16', isChecked: false, isUploaded: false},
    ];
    const photoes_2 = [
      {id: 2 , created: '03.04', isChecked: true, isUploaded: true},
      {id: 5 , created: '03.11', isChecked: true, isUploaded: true},
      {id: 8 , created: '03.18', isChecked: true, isUploaded: true},
      {id: 11 , created: '03.25', isChecked: true, isUploaded: true},
      {id: 14 , created: '04.04', isChecked: true, isUploaded: true},
      {id: 17 , created: '04.11', isChecked: true, isUploaded: true},
      {id: 20 , created: '04.18', isChecked: false, isUploaded: true},
      {id: 23 , created: '05.04', isChecked: false, isUploaded: false},
      {id: 26 , created: '05.11', isChecked: false, isUploaded: false},
      {id: 29 , created: '05.18', isChecked: false, isUploaded: false},
    ];
    const photoes_3 = [
      {id: 3 , created: '03.06', isChecked: true, isUploaded: true},
      {id: 6 , created: '03.13', isChecked: true, isUploaded: true},
      {id: 9 , created: '03.20', isChecked: true, isUploaded: true},
      {id: 12 , created: '03.27', isChecked: true, isUploaded: true},
      {id: 15 , created: '04.06', isChecked: true, isUploaded: true},
      {id: 18 , created: '04.13', isChecked: false, isUploaded: true},
      {id: 21 , created: '04.20', isChecked: false, isUploaded: true},
      {id: 24 , created: '05.06', isChecked: false, isUploaded: false},
      {id: 27 , created: '05.13', isChecked: false, isUploaded: false},
      {id: 30 , created: '05.20', isChecked: false, isUploaded: false},
    ];
    return (
          <Grid container spacing={2}>
            <Grid className={classes.container} spacing={2} item xs={4} >
              <div className={classes.root} >
                { photoes_1.map( (photo) => (
                  <div key={photo.id} text-align='center'>
                    <Button variant="contained" color={photo.isUploaded ? (photo.isChecked ? 'primary' : 'secondary') : 'grey'}
                            className={classes.button} size='middle'>
                      {photo.created}
                      <PhotoIcon className={classes.Icon} />
                    </Button>
                  </div>
                  ))}
                </div>
            </Grid>
            <Grid className={classes.container} spacing={2} item xs={4} >
              <div className={classes.root} >
                { photoes_2.map( (photo) => (
                  <div key={photo.id}>
                    <Button variant="contained" color={photo.isUploaded ? (photo.isChecked ? 'primary' : 'secondary') : 'grey'}
                            className={classes.button} size='middle'>
                      {photo.created}
                      <PhotoIcon className={classes.Icon} />
                    </Button>
                  </div>
                  ))}
                </div>
            </Grid>
            <Grid className={classes.container} spacing={2} item xs={4} >
              <div className={classes.root}>
                { photoes_3.map( (photo) => (
                  <div key={photo.id}>
                    <Button variant="contained" color={photo.isUploaded ? (photo.isChecked ? 'primary' : 'secondary') : 'grey'}
                            className={classes.button} size='middle'>
                      {photo.created}
                      <PhotoIcon className={classes.Icon} />
                    </Button>
                  </div>
                  ))}
              </div>
            </Grid>
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
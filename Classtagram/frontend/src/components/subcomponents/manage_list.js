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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { borders } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 200,
  },
  tablerow_header: {
    background: 'linear-gradient(45deg, #e3f2fd 20%, #bbdefb 80%)',
    //background: 'linear-gradient(45deg, #f3e5f5 20%, #e1bee7 80%)',
  },
  tablerow_instructor: {
    background: 'linear-gradient(45deg, #ede7f6 20%, #d1c4e9 80%)',
  },
  tablerow_student: {
    background: 'white',
  },
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

export default function Manage_List({
  teststor,
}) {
    const classes = useStyles();
    return (
      <div>
        <Table className={classes.table} >
        <TableHead>
          <TableRow className = { classes.tablerow_header} >
            <TableCell>name</TableCell>
            <TableCell align="right">student_number</TableCell>
            <TableCell align="right">school</TableCell>
            <TableCell align="right">major</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { teststor.course.superuser.map( (participant) => (
            <TableRow className={participant.is_student? classes.tablerow_student : classes.tablerow_instructor} key={participant.id}>
              <TableCell component="th" scope="row">
                {participant.name}
              </TableCell>
              <TableCell align="right">{participant.student_number}</TableCell>
              <TableCell align="right">{participant.school}</TableCell>
              <TableCell align="right">{participant.major}</TableCell>
            </TableRow>    
          ))}        
          { teststor.course.participants.map( (participant) => (
            <TableRow className={participant.is_student? classes.tablerow_student : classes.tablerow_instructor} key={participant.id}>
              <TableCell component="th" scope="row">
                {participant.name}
              </TableCell>
              <TableCell align="right">{participant.student_number}</TableCell>
              <TableCell align="right">{participant.school}</TableCell>
              <TableCell align="right">{participant.major}</TableCell>
            </TableRow>    
          ))}
        </TableBody>
        </Table>  
      </div>
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
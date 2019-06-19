import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Main_timeLine from './main_timeLine';
import Announce from './announce';
import Main_courseEdit from './main_courseEdit';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#282c34"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'row',
  },
  fixedHeight_half: {
    height: 341,
  },
  fixedHeight_full: {
    height: 700,
  },
}));

export default function MainDashboard({
  data,
  photodata,
  onLinkMain,
  onLinkCourse,
  onLinkManage,
  onLinkPhoto,
  onLinkStat,
  makeRequest
  }) {
    
  const teststor = {
    isloaded : false,
    user: {
      username: "test01", //ID
      is_student: true,
      name: "test01", //Name
      student_number: "0101-01010",
      school: "SNU",
      major: "CSE",
    },
    courses: [
      {
        coursename: "SWPP",
        superuser:"prof_1",
        participants: [

        ],
      },
      {
        coursename: "AL",
        superuser:"prof_2",
        participants: [

        ],
      },
      {
        coursename: "CA",
        superuser:"prof_3",
        participants: [

        ],
      },
    ],
    photoes: [
      {
        course:1,
        coursename:"SWPP",
        photo:"photo_1",
        created:"03.03",
        isChecked: true,
        isUploaded: true,
      },
      {
        course:1,
        coursename:"AL",
        photo:"photo_2",
        created:"03.06",
        isChecked: true,
        isUploaded: true,        
      },
    ],
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper_half = clsx(classes.paper, classes.fixedHeight_half);
  const fixedHeightPaper_full = clsx(classes.paper, classes.fixedHeight_full);
  
  if (data != undefined && photodata != undefined) {
    teststor.courses = data.courses;
    teststor.user = data;
    teststor.photoes = photodata.slice();
    teststor.photoes.reverse();
    teststor.isloaded = true;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Classtagram
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <ListItem button onClick={onLinkMain}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary= "Main" />
            </ListItem>
          </div>
          {teststor.courses.map( (item) => (
            <div key= {item.id}>
              <ListItem button onClick={() => onLinkCourse(item.id)}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary= {item.coursename} />
              </ListItem>
            </div>             
          ))
          }
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            {/* Recent Orders */}
            <Grid item xs={8}>
              <Paper className={fixedHeightPaper_full}>
                <Main_timeLine
                  teststor={teststor}
                  onLinkPhoto_timeLine={(e)=>onLinkPhoto(e)}
                />
              </Paper>
            </Grid>
            <Grid container spacing={2} item xs={4} >
              <Grid item xs={12} >
                <Paper className={fixedHeightPaper_half}>
                  {/*<Announce />*/} 123123
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} >
                <Paper className={fixedHeightPaper_half}>
                  <div> 
                    <Main_courseEdit
                      teststor = {teststor}
                      onEdit = {(e) => makeRequest(e)}
                    />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
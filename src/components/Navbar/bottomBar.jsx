import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import {Link,useLocation} from 'react-router-dom';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://myshoppie.netlify.app/">
        MyShoppie
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>
    { location.pathname === '/' && (
    <footer className={classes.footer}>
    <Container maxWidth="sm">
      <Typography variant="body1">Ayush Gupta</Typography>
      <Copyright />
    </Container>
  </footer>)}
    </div>
  );
};

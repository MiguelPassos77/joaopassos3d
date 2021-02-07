import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Grid, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { createMuiTheme } from '@material-ui/core/styles';
import Cards from './Cards'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    color: '#000000',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#ff0000',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#000000',
    fontSize: '4.5rem',
  },
  contactMe: {
    color: '#000000',
    fontSize: '2rem',
  },
  goDown: {
    color: '#000000',
    fontSize: '4rem',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  card: {
    //boxShadow: '0px 20px 20px #000',
    //borderRadius: '80px',
    padding: '25px',
    width: '90%',
    margin: 'auto',
    position: 'fixed',
    float: 'left',
    display: 'grid',
    //textAlign: 'center', 
    fontFamily: 'Nunito',
    position: 'relative',
  },
}));

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})


export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <Avatar className={classes.large} src="./assets/logo.png"/>
          </h1>
          <Grid 
            container 
            direction="column" 
            justify="flex-end"
            wrap="nowrap"
            alignItems="center"
            spacing={1}
            className={classes.card}>
            <Cards/>
          </Grid>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div style={{marginTop:'50px'}}  className={classes.container}>
          <h1 className={classes.title}>
            JP<span className={classes.colorText}>3D</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

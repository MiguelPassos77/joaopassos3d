import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import "./styles.css";
import { Carousel } from 'antd';
import {Paper,  Button, Card} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: "100%",
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bgSite.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 50%',
  },
  card:{
    boxShadow: '0px 3px 18px #EDF0F2',
    borderRadius: '8px',
    padding: '25px'
  },
  sticky:{
    position: 'sticky',
    top:'12%',
    padding: '25px'
  },
  rightContainer:{
    position: 'sticky',
    flex: 3,
    textAlign: 'left',
    padding: '30px 80px 30px 150px',
    width: '100%',
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
  
      <br/>
      <PlaceToVisit />
    </div>
  );
}

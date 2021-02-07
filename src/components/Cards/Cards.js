import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Email from '@material-ui/icons/Email';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import AnimatedBorderDiv from "../AnimatedBorder/AnimatedBorder"



const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    top: '25%',
    left: '95%',
    // marginTop: '75px',
    borderRadius: 5,
    position: 'absolute',
    paddingBottom: '0px !important'

    },
  }
);



export default function Cards() {
  const classes = useStyles();

  
  const Default = () => (
    <>
      <CardContent className={classes.root}>
       
      </CardContent>
    </>
  )

  const Share = () => (
    <>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Share
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </>
  )

  const More = () => (
    <>
      <CardContent>
      </CardContent>
    </>
  )

  const [component, setComponent] = useState(<Default />)
  
  const handleClick = (c) => {
    switch (c) {
      case 'Share':
        setComponent(<Share />)
        break;
      case 'More':
        setComponent(<More />)
        break;
    }
  }

  return (
    <Card className={classes.card}>
    <AnimatedBorderDiv>
      <CardContent style={{textAlign:'left'}}>
        <Typography style={{textAlign:'center'}} gutterBottom variant="h5" component="h2">
          Contacte-me!
        </Typography>
        <Typography style={{display: 'inline-flex', alignItems:'center'}} variant="body2" color="textPrimary" component="p">
            <PhoneAndroidIcon />+351 963 891 152
        </Typography>
            <br/>
        <Typography style={{display: 'inline-flex', alignItems:'center'}} variant="body2" color="textPrimary" component="p">
            <Email style={{marginRight: '5px'}} />  <a href="mailto:joaopassos1712@gmail.com">joaopassos1712@gmail.com</a>
        </Typography>
        <br/>
        <Typography style={{textAlign:'center'}} variant="body2" color="textPrimary" component="p">
            <Instagram style={{marginRight: '5px', cursor: 'pointer'}} onClick={() => {window.open("https://www.instagram.com/miguelpassos7/", "_blank")}}/>   
            <Facebook style={{marginRight: '5px', cursor: 'pointer'}} onClick={() => {window.open("https://www.instagram.com/miguelpassos7/", "_blank")}}/>
        </Typography>
        { component }  
      </CardContent>
    </AnimatedBorderDiv>      
    </Card>
  );
}
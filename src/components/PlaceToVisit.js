import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import CarouselCard from './CarouselCard/CarouselCard'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import "../image-gallery.scss";

import ImageGallery from 'react-image-gallery';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  carouselCard:{
    width: "5px",
    height: "5px",
    background: '#333',
    color: '#fff',
    fontSize: '30px',
    margin: '0 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  const [isShowing, setIsShowing] = useState(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }
  ];

  const images = [
    {
      original: '/assets/carousel/Carousel1.png',
      thumbnail: '/assets/carousel/Carousel1.png',
    },
    {
      original: '/assets/carousel/Carousel2.png',
      thumbnail: '/assets/carousel/Carousel2.png',
    },
    {
      original: '/assets/carousel/Carousel3.png',
      thumbnail: '/assets/carousel/Carousel3.png',
    },
    {
      original: '/assets/carousel/Carousel4.png',
      thumbnail: '/assets/carousel/Carousel4.png',
    },
    {
      original: '/assets/carousel/Carousel5.png',
      thumbnail: '/assets/carousel/Carousel5.png',
    },
    {
      original: '/assets/carousel/Carousel6.png',
      thumbnail: '/assets/carousel/Carousel6.png',
    },
    {
      original: '/assets/carousel/Carousel7.png',
      thumbnail: '/assets/carousel/Carousel7.png',
    },
    {
      original: '/assets/carousel/Carousel8.png',
      thumbnail: '/assets/carousel/Carousel8.png',
    },
  ];
  
  return (
    <div>
      <div className={classes.root} id="place-to-visit" onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}>
        <ImageGallery items={images} />;
      </div>
    </div>
  );
}

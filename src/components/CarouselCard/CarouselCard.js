import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const CarouselCard = ({ cardImage }) => (
    <div className="card">
      <img src={cardImage} alt="cardImage" />
    </div>
  );
export default CarouselCard;


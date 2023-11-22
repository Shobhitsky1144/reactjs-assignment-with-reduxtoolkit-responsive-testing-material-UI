import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {useSelector} from 'react-redux';
import { selectCardData } from '../redux/cardSlice';
import '../styles/travelcard.css'

const TravelCard = () => {
  const cardData=useSelector(selectCardData)
  return (
    <Grid container spacing={2} >
      {cardData && cardData?.map(({id,img,title,content}) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={id}>
          <Card sx={{ maxWidth: 345,margin:'15px 0' }}>
            <CardMedia className='card-img'
               image={img}
              title="green iguana"
            />
            <CardContent>
              <h1 className='card-title'>
               {title}
              </h1>
              <p className='card-content'>
               {content}
                </p>
            </CardContent>
           
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TravelCard;

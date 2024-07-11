import React, { useState } from 'react';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ onClose, places }) => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h4">
          Restaurants, Hotels & Attractions around you
        </Typography>
      
      </div>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants" style={{ display: 'block', padding:'10px'}}>Restaurants</MenuItem>
          <MenuItem value="hotels" style={{ display: 'block', padding:'10px'}}>Hotels</MenuItem>
          <MenuItem value="attractions" style={{ display: 'block', padding:'10px'}}>Attractions</MenuItem>
        </Select> 
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0} style={{ display: 'block', padding:'10px'}}>All</MenuItem>
          <MenuItem value={3}style={{ display: 'block', padding:'10px' }}>Above 3.0</MenuItem>
          <MenuItem value={4} style={{ display: 'block', padding:'10px' }}>Above 4.0</MenuItem>
          <MenuItem value={4.5} style={{ display: 'block', padding:'10px' }}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid className={classes.list} container spacing={3}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;

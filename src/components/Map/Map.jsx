import React from 'react';
import useStyles from './styles';
import Rating from '@material-ui/lab';
import {Paper, Typography, useMediaQuery,  IconButton} from '@material-ui/core';
import {LocationOnOutlined} from '@material-ui/icons/LocationOnOutlined';
import GoogleMapReact from 'google-map-react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'; 
const Map = ({setCoordinates, setBounds, coordinates, isExpanded, onToggleList, isListVisible }) => {
  const classes = useStyles ();
  const isMobile = useMediaQuery ('(min-width:600px)');
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyCTLUofiSq14Wjcp2knzNg3zqzlio5iraM'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e)=>{
          setCoordinates({lat: e.center.lat, lng: e.center.lng});
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }}
        onChildClick={''}
        
      />
      <IconButton className={classes.toggleButton} onClick={onToggleList}>
        {isListVisible ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
};

export default Map;

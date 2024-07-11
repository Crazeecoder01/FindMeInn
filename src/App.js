import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './api';
import { CssBaseline, Grid } from '@material-ui/core';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [bounds, setBounds] = useState({});
  const [coords, setCoords] = useState({});
  const [isListVisible, setIsListVisible] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coords, bounds]);

  const handleToggleList = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        {isListVisible && (
          <Grid item xs={12} md={4}>
            <List onClose={handleToggleList} places={places} />
          </Grid>
        )}
        <Grid item xs={12} md={isListVisible ? 8 : 12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map
            setCoordinates={setCoords}
            setBounds={setBounds}
            coordinates={coords}
            isExpanded={!isListVisible}
            onToggleList={handleToggleList}
            isListVisible={isListVisible}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;

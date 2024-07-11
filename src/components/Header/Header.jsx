import React from 'react';
import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import logo from './logo.png';
import useStyles from './styles.js';

const Header = ({onPlaceChanged, onLoad}) => {
  const classes = useStyles ();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
      <img src={logo} alt="Travel Advisor" className={classes.logo} /> 
        <Box display="flex">

          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{root: classes.inputRoot, input: classes.inputInput}}
            />
          </div>
          {/* </Autocomplete>  */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

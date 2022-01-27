import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';

// This is a hook.  It allows you to use state and other React features without writing a class
import useStyles from './styles';


//React Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

// Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React 
// elements describing what should appear on the screen.


const Header = () => {
    const classes = useStyles();

        return (
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" className={classes.title}>
                        Travel Advisor
                    </Typography>
                    <Box display="flex">
                        <Typography variant="h6" className={classes.title}>
                            Explore new places
                        </Typography>
                    
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>  
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search... " classes={{root: classes.inputRoot, input: classes.inputInput}}  />
                        </div>
                
                   
                    </Box>
                </Toolbar>
            </AppBar>
        )
}

export default Header;
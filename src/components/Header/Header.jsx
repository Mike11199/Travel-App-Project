import React from 'react';
import { Autocomplete} from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, Inputbase, Box } from '@material-ui/core';
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
                <Toolbar classname={classes.Toolbar}>
                    <Typography variant="h5" className={classes.title}>
                        Travel Advisor
                    </Typography>
                    <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>  
                                <Searchicon />
                            </div>
                            <InputBase placeholder="Search... " classes={{root:classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    {/* </Autocomplete> */}
                   
                    </Box>
                </Toolbar>
            </AppBar>
        )
}

export default Header;
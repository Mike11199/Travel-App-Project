import React, { useState, useEffect} from "react";
import {CssBaseline, Grid} from '@material-ui/core';

//import the API function we made here
import { getPlacesData } from './api'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
// import Button from '@material-ui/core/Button'


const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({lat: 38, lng: -122});
    //set map corners here
    const [bounds, setBounds] = useState(null);
    

    // useEffect is a function that accepts a callback function, a function that runs after it; 
    //[] is the dependency array part of it.  If empty, the function only happens once at the start of the application.
    //getPlacesData is also an ASYNCHRONOUS function.  So have to add the .then on it which is another callback function


    useEffect(() => {
        getPlacesData()
        .then((data) => {
            console.log(data);
            setPlaces(data);
        })
    }, []);


    return (
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>  
            <Grid item xs={12} md={4}>
                <List />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map 
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                />
            </Grid>
        </Grid>
        </>
    );
}

export default App;



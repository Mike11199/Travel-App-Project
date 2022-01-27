import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
    // starting the hooks here.  useMediaQuery pass in a string so that isMobile variable will be false if the device is larger than 600 pixels.
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat: 0, lng: 0};

        return (
            <div className={classes.mapContainer}>
                
                
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyAq-T3yVkjvA-aLYQbWs5n2k8Jz2a2GpEU' }}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50,50,50,50]}
                    options={''}
                    onchange={''}
                    onChildClick={''}
                >

                </GoogleMapReact>

            </div>
        );
    
    }


export default Map;
import React from 'react';
import GoogleMapReact from 'google-map-react'
import './GoogleMap.scss';



const GoogleMap = () => {
    const coordinates = { lat: 51.1657, lng: 10.4515 };
    return (


        <
        div >
        <
        div id = "map" >
        <
        GoogleMapReact bootstrapURLKeys = {
            { key: 'AIzaSyBmMQJzG7jLXfTSehj03f1flhH2blolem0' }
        }
        defaultCenter = { coordinates }
        center = { coordinates }
        defaultZoom = { 8 }
        margin = {
            [50, 50, 50, 50]
        }
        options = { '' }
        onChange = { '' }
        onChildClick = { '' } >

        <
        /GoogleMapReact> < /
        div > <
        /div>
    )
}

export default GoogleMap
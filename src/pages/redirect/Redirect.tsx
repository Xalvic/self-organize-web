import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './redirect.scss';

const Redirect = () => {

    const[items, setItems]: any = useState(null);

    const getData = () => {

        axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me/tracks',
            headers: {
                'Authorization': 'Bearer ' + window.location.href.slice(44, -34)
            },
            })
            .then(function (response) {
                setItems(response.data.items);

                console.log(response.data.items);

                console.log(items);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };

    const playTrack = (uri: any) => {
        axios({
            method: 'put',
            url: 'https://api.spotify.com/v1/me/player/play',
            headers: {
                'Authorization': 'Bearer ' + window.location.href.slice(44, -34)
            },
            data: {
                "context_uri": uri,
                "offset": {
                    "position": 5
                  },
                "position_ms": 0
            },
            })
            .then(function (response) {
                setItems(response.data.items);

                console.log(response.data.items);

                console.log(items);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    useEffect(() => {
        console.log(items);
    }, [items])

    return (
        <div className="redirect-container">
            <h1> This is the Redirect Page </h1>

            <p>

            <button onClick={getData} className="spotify-button">GET DATA</button>

            </p>

            <div className="music-container">

            {items && items.map((item: any) => (
                <div className="track" key={item.id}>
                    
                    <img className="track-image" src={item.track.album.images[2].url} alt="img" />

                    <p className="track-title">{item.track.name}</p>

                    <button onClick={() => playTrack(item.track.uri)}>play</button>

                </div>
            ))}

            </div>
        </div>
    )
}
export default Redirect;
'use client';

import { useEffect } from "react";
import { getSpotifyProfile } from "../spotify/spotify-api.js";

export function Spotify() {
    useEffect(() => {
        getSpotifyProfile().then(profile => {
            console.log(profile);
        });
    }, []);
    return <div>Spotify Profile</div>;
}
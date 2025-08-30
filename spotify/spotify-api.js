import { SPOTIFY_SECRET } from 'utils';

const clientId = "9eb411be5fde4c4ca047a5c86afb4389";

export function getSpotifyProfile() {
    return fetchProfile();
}

async function getAccessToken(clientId) {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", clientId);
    params.append("client_secret", SPOTIFY_SECRET);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    console.log("Access Token:", access_token);
    return access_token;
}

async function fetchProfile() {
    const result = await fetch("https://api.spotify.com/v1/playlists/" + getOnRepeatPlaylistId(getAccessToken(clientId)) + "/tracks?limit=3", {
        method: "GET", headers: { Authorization: "Bearer  " +  getAccessToken(clientId) }
    });

    return await result.json();
}

async function getOnRepeatPlaylistId(accessToken) {
  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  });
  const data = await response.json();

  const onRepeatPlaylist = data.items.find(playlist => playlist.name === 'On Repeat');

  if (onRepeatPlaylist) {
    return onRepeatPlaylist.id;
  } else {
    throw new Error('On Repeat playlist not found');
  }
}
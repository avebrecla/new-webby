const SPOTIFY_SECRET = process.env.SPOTIFY_SECRET;
const clientId = "9eb411be5fde4c4ca047a5c86afb4389";

export function getSpotifyProfile() {
  return fetchProfile();
}

async function fetchProfile() {
  const accessToken = await getAccessToken(clientId);
  const result = await fetch("https://api.spotify.com/v1/playlists/2rsoHZDoFvQSWVPa4iFqvO/tracks?limit=3", {
      method: "GET", headers: { Authorization: "Bearer " +  accessToken }
  });

  return await result.json();
}

// async function getOnRepeatPlaylistId(accessToken) {
//   const response = await fetch('https://api.spotify.com/v1/me/playlists', {
//     headers: {
//       'Authorization': 'Bearer ' + accessToken
//     }
//   });
//   const data = await response.json();

//   const onRepeatPlaylist = data.items.find(playlist => playlist.name === 'On Repeat');

//   if (onRepeatPlaylist) {
//     return onRepeatPlaylist.id;
//   } else {
//     throw new Error('On Repeat playlist not found');
//   }
// }

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

  const data = await result.json();
  if (!data.access_token) {
    console.error("Spotify token error:", data);
    throw new Error("Failed to get access token from Spotify");
  } else {
    console.log("Spotify token success");
  }
  return data.access_token;
}

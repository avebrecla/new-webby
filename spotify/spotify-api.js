const clientId = "9eb411be5fde4c4ca047a5c86afb4389";
const albumId = "37i9dQZF1EpnpeW5TeNkSd";

export function getSpotifyProfile() {
    if (typeof window === "undefined") return Promise.resolve(null); // SSR safety

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
        redirectToAuthCodeFlow(clientId);
        return Promise.resolve(null);
    } else {
        return (async () => {
            const accessToken = await getAccessToken(clientId, code);
            const profile = await fetchProfile(accessToken, albumId);
            return profile;
        })();
    }
}

async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "https://avery-clark.netlify.app/callback");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "https://avery-clark.netlify.app/callback");
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}

async function fetchProfile(token, albumId) {
    const result = await fetch("https://api.spotify.com/v1/albums/" + albumId + "/tracks?limit=3", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
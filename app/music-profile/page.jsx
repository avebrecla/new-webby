import { Spotify } from "components/spotify";

export const metadata = {
    title: 'music-profile'
};

export default async function Page() {
    return (
        <div className="">
            <Spotify />
        </div>
    );
}
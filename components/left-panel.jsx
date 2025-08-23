import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import { WeatherData } from './weather';
import { Spotify } from './spotify';


export function LeftPanel() {
    return (
        <div className="w-1/4 bg-gray-500/1 p-4 overflow-auto">
            <div className="min-h-full">
                <WeatherData />
                <Spotify />
                {/* weather */}
                {/* weather */}
            </div>
        </div>
    );
}

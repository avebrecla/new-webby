import { FeedbackForm } from 'components/feedback-form';
import { RandoFact } from 'components/rando-fact';
import { WeatherData } from 'components/weather';
import { Spotify } from 'components/spotify';
import Link from 'next/link';

export default function Page() {
    return (
        <section>
            <div className="">
                <p>$ aveWeb help</p>
                <p>hello welcome to my website, this will be a place for me to show some things and ramble</p>
                <p>let me know in the below feedback form if you have anything you'd like to see</p>
            </div>
            <div className="pt-5">
                <p className="pb-2">check out some of my things --&gt;</p>
                <div className="flex flex-col gap-2 indent-10">
                    <div className="flex items-center">
                        <Link className="link-cool" href="/blog"><span className="font-bold mr-2">blog</span></Link>
                        <span>some thoughts i have that you get to read</span>
                    </div>
                    <div className="flex items-center">
                        <Link className="link-cool" href="/projects"><span className="font-bold mr-2">projects</span></Link>
                        <span>stuff i&apos;ve built or am building</span>
                    </div>
                    <div className="flex items-center">
                        <Link className="link-cool" href="/about"><span className="font-bold mr-2">about</span></Link>
                        <span>learn more about me</span>
                    </div>
                </div>
            </div>
            <div className="pt-10 max-w-lg">
                <RandoFact />
            </div>
            <div className="pt-10 max-w-lg">
                <WeatherData />
            </div>
            <div className="pt-10 max-w-lg">
                <Spotify />
            </div>
            <div className="pt-10">
                <FeedbackForm />
            </div>
        </section>
    );
}

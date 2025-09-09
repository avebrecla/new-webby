import { FeedbackForm } from 'components/feedback-form';
import { RandoFact } from 'components/rando-fact';
import { WeatherData } from 'components/weather';
import { Spotify } from 'components/spotify';
import Link from 'next/link';
import { AsciiDivider } from 'components/divider';

export default function Page() {
    return (
        <section className="max-w-lg">
            <div className="">
                <p>$ aveWeb help</p>
                <p>hello welcome to my website, this will be a place for me to show some things and ramble. let me know in the below feedback form if you have anything you&apos;d like to see</p>
            </div>
            <div className="pt-5">
                <p className="pb-2">check out some of my things --&gt;</p>
                <div className="flex flex-col gap-2 max-w-full">
                    <div className="flex">
                        <Link className="link-cool indent-10 mr-5" href="/blog"><span className="font-bold">blog</span></Link>
                        <span>some thoughts i have that you get to read</span>
                    </div>
                    <div className="flex">
                        <Link className="link-cool indent-10 mr-5" href="/projects"><span className="font-bold">projects</span></Link>
                        <span>stuff i&apos;ve built or am building</span>
                    </div>
                    <div className="flex">
                        <Link className="link-cool indent-10 mr-5" href="/about"><span className="font-bold">about</span></Link>
                        <span>learn more about me</span>
                    </div>
                </div>
            </div>
            <AsciiDivider />
            <div className="">
                <RandoFact />
            </div>
            <AsciiDivider />
            <div className="">
                <WeatherData />
            </div>
            <AsciiDivider />
            <div className="">
                <Spotify />
            </div>
            <AsciiDivider />
            <div className="pt-10">
                <FeedbackForm />
            </div>
        </section>
    );
}

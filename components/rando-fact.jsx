'use client';

import { useEffect, useState } from "react";

export function RandoFact() {
    const [fact, setFact] = useState(null);

    useEffect(() => {
        fetch('https://uselessfacts.jsph.pl/api/v2/facts/today')
            .then(res => res.json())
            .then(data => setFact(data.text.toLowerCase()));
    }, []);

    if (!fact) return <div>fact loading...</div>;

    return (
        <footer className="">
            <div className="w-full text-white">
                <p className="pb-2">rando fact of the day --&gt;</p>
                <div className="ml-10">
                    <span className="inline-block">{fact}</span>
                </div>
            </div>
        </footer>
    );
}

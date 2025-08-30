'use client';

import { useEffect, useState } from "react";

export function Footer() {
    return (
        <footer className="pt-4 pb-2">
            <div className="w-full text-white p-2 overflow-hidden">
                <div className="whitespace-nowrap animate-text-scroll">
                    <RandomFactList />
                </div>
            </div>
        </footer>
    );
}

function RandomFactList() {
    const [fact, setFact] = useState("rando fact of the day: ");

    useEffect(() => {
        fetch('https://uselessfacts.jsph.pl/api/v2/facts/today')
            .then(res => res.json())
            .then(data => setFact("rando fact of the day: " + data.text));
    }, []);

    return (
        <span className="inline-block px-4">{fact}</span>
    );
}

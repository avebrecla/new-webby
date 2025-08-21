let randomFactString = "rando fact of the day: ";

export function Footer() {
    return (
        <footer className="pt-8 pb-8 pl-4 pr-4">
            <div className="w-full text-white p-2 overflow-hidden">
                <div className="whitespace-nowrap animate-text-scroll">
                    <RandomFactList />
                </div>
            </div>
        </footer>
    );
}

async function RandomFactList() {
    const randomFact = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/today');

    const content = await randomFact.json();
    randomFactString = randomFactString.concat(content.text);

    return (
            <span className="inline-block px-4">{randomFactString}</span>
        );
}

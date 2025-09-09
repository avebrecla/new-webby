import { AsciiTitle } from 'components/ascii-title';
import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'the webby'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/speak-funny.png" sizes="any" />
            </head>
            <body className="text-white bg-black">
                <AsciiTitle />
                <main className="grow p-5 min-w-full">{children}</main>
            </body>
        </html>
    );
}

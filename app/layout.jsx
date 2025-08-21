import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { LeftPanel } from '../components/left-panel';

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
            <body className="antialiased text-white bg-[url('/images/cool-mtns-bigger.png')] h-screen bg-cover bg-center bg-no-repeat bg-black">
                <div className="flex flex-col min-h-screen px-6 sm:px-12  pt-5 pb-5">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow bg-gray-500/50">
                        <Header />
                        <div className="flex flex-1">
                            <LeftPanel />
                            <div className="w-3/4 p-4">
                                <main className="grow">{children}</main>
                            </div>
                            
                        </div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}

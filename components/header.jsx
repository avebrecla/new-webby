import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'home', href: '/' },
    { linkText: 'blog', href: '/blog' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 p-5">
            <Link href="/">
                <Image src="/images/speak-funny.png" alt="Netlify logo" width="100" height="100"/>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index} className="bg-grey-50">
                            <div className="bg-grey-50">
                                <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                    {item.linkText}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            
        </nav>
    );
}

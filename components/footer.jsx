import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-8 pb-8 pl-4 pr-4">
            <div className="w-full text-white p-2 overflow-hidden">
                <div className="whitespace-nowrap animate-text-scroll">
                    <span className="inline-block px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta congue turpis in mollis. Aenean condimentum quis eros at varius. Ut convallis facilisis mattis. Nullam dapibus ultrices bibendum. Maecenas sit amet euismod metus. Sed dapibus lorem vitae erat porta, quis faucibus turpis malesuada. Donec consequat libero in dui vulputate, vitae lobortis tellus euismod. Proin mollis nec magna nec sagittis. Morbi malesuada ante vulputate faucibus imperdiet. Quisque ultrices eu sem quis vestibulum. Vestibulum pulvinar consectetur cursus. Fusce felis lacus, vehicula tincidunt pellentesque et, imperdiet eget felis.</span>
                </div>
            </div>
        </footer>
    );
}

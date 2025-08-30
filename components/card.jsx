export function Card({ title, children, className }) {
    return (
        <div className={['bg-gray-950/100 rounded-sm text-green-600', className].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-4 px-6 py-8">
                {title && <h3 className="">{title}</h3>}
                {children}
            </div>
        </div>
    );
}

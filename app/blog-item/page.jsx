'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import blogItems from '../../data/blog-items.json';

function BlogContent() {
    const searchParams = useSearchParams();
    const currentBlog = blogItems.find(item => item.path === searchParams.get('path'));
    console.log("Current Blog:", currentBlog);

    if (!currentBlog) return <div>Blog not found.</div>;

    return (
        <div className="font-mono">
            <p className="italic pb-3">{currentBlog.title} | {currentBlog.date}</p>
            <div>
                {currentBlog.tags.map((tag) => (
                    <span key={tag} className="text-xs italic pr-2">#{tag}</span>
                ))}
            </div>
            {currentBlog.paragraphs.map((para, index) => (
                <p key={index} className="mb-4">{para}</p>
            ))}
        </div>
    );
}

export default function Page() {
    return (
        <div>
            <Suspense fallback={<div>Loading blog...</div>}>
                <BlogContent />
            </Suspense>
        </div>
    );
}
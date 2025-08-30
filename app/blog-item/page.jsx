'use client';

import { useSearchParams } from 'next/navigation';
import blogItems from '../../data/blog-items.json';
import { Card } from '../../components/card';

export default function Page() {
    const searchParams = useSearchParams();
    const currentBlog = blogItems.find(item => item.path === searchParams.get('path'));
    console.log("Current Blog:", currentBlog);

    return (
        <div>
            <Card className="font-mono" title={currentBlog.title + " | " + currentBlog.date}>
                <p className="italic"></p>
                <div>
                    {currentBlog.tags.map((tag) => (
                        <span key={tag} className="text-xs italic pr-2">#{tag}</span>
                    ))}
                </div>
                {currentBlog.paragraphs.map((para, index) => (
                    <p key={index} className="mb-4">{para}</p>
                ))}
            </Card>
        </div>
    );
}
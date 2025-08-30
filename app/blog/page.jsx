import blogItems from '../../data/blog-items.json';
import Link from 'next/link';

export const metadata = {
    title: 'blog'
};

export default async function Page() {
    return (
        <div className="">
            <h1 className="mb-8 underline">ramblings</h1>
            <div className="">
                {/* <div>
                    <span className="mb-6">filter by tag: </span>
                    <span className="mb-6"><Link></Link></span>
                    <span className="mb-6"><Link></Link></span>
                    <span className="mb-6"><Link></Link></span>
                </div> */}
                <ul>
                    {blogItems.map((blog, index) => (
                        <li className="mb-3" key={index}>
                            <div className="width-full p-2">
                                <p className="italic">{blog.date}</p>
                                <Link href={{
                                    pathname: "/blog-item",
                                    query: { path: blog.path }
                                }}><h3 className="underline">{blog.title}</h3></Link>
                                <p className="text-sm">{blog.snippet}</p>
                                {blog.tags.map((tag) => (
                                    <span key={tag} className="text-xs italic pr-2">#{tag}</span>
                                ))}
                                <br/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
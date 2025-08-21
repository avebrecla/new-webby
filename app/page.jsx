import Link from 'next/link';
import { FeedbackForm } from 'components/feedback-form';
import { getNetlifyContext } from 'utils';


const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-5">
            <section className="">
                <h1 className="mb-4">welcome to my website</h1>
                <p className="mb-6">this will be a place i can show off some things, ramble about nothing, and sometimes make stuff</p>
            </section>
            <section className="flex flex-col gap-4">
                <FeedbackForm />
            </section>
        </div>
    );
}

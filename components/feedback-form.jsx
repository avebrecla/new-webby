'use client';

import { useState } from 'react';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className="w-full md:max-w-md mb-15">
            <p className="pb-3 font-bold">feedback form --&gt;</p>
            <form name="feedback" onSubmit={handleFormSubmit} className="flex flex-col align-center indent-10">
                <input type="hidden" name="form-name" value="feedback" />
                <div className="flex items-center gap-2">
                    <label htmlFor="name">favorite color:</label>
                    <input id="name" name="name" type="text" required className="flex-1 pb-2" />
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="message">recs:</label>
                    <input id="message" name="message" type="text" required className="flex-1 pb-2" />
                </div>
                <button className="btn">
                    Submit
                </button>
            </form>
        </div>
    );
}

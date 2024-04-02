

import React from 'react';
import { Input, Button } from '../components/UI';

const ContactPage = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
                    <form>
                        <div className="mb-4">
                            <Input type="text" placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <Input type="email" placeholder="Your Email" />
                        </div>
                        <div className="mb-4">
                            <Input type="text" placeholder="Subject" />
                        </div>
                        <div className="mb-4">
                            <textarea className="w-full px-3 py-2 border rounded-md" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <Button type="submit">Send Message</Button>
                    </form>
            </div>
        </>
    );
};

export default ContactPage;
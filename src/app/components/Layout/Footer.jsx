
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 py-8">
                <div className="container mx-auto px-4">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
                    <ul className="mt-4 flex flex-wrap">
                        <li className="mr-6 mb-2">
                            <Link href="/" passHref legacyBehavior>
                                <a className="text-gray-400 hover:text-white">Home</a>
                            </Link>
                        </li>
                        <li className="mr-6 mb-2">
                            <Link href="/about" passHref legacyBehavior>
                                <a className="text-gray-400 hover:text-white">About</a>
                            </Link>
                        </li>
                        {/* Add more footer links as needed */}
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;

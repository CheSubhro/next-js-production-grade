
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" passHref legacyBehavior>
                                    <a className="text-white text-2xl font-bold">Your Logo</a>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href="/" passHref legacyBehavior>
                                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                    </Link>
                                    <Link href="/about" passHref legacyBehavior>
                                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                    </Link>
                                    <Link href="/contact" passHref legacyBehavior>
                                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                    </Link>
                                    {/* Add more navigation links as needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;

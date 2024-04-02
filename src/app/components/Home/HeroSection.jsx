
import React from 'react';
import { Button } from '../UI';

const HeroSection = () => {
    return (
        <>
            <section className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
                    <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                    <Button>Learn More</Button>
                </div>
            </section>
        </>
    );
};

export default HeroSection;

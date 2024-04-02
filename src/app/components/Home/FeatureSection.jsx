
import React from 'react';
import { Card } from '../UI';

const FeatureSection = () => {
    return (
        <>
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card
                            title="Feature 1"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
                        />
                        <Card
                            title="Feature 2"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
                        />
                        <Card
                            title="Feature 3"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureSection;


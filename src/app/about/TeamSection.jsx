
import React from 'react';
import { Card } from '../components/UI';

const TeamSection = () => {
    return (
        <>
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-slate-700 p-6 rounded-lg shadow-md"> 
                            <Card
                                title="John Doe"
                                description="Position: Developer"
                            />
                        </div>
                        <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                            <Card
                                title="Jane Smith"
                                description="Position: Designer"
                            />
                        </div>
                        <div className="bg-slate-700 p-6 rounded-lg shadow-md">
                            <Card
                                title="Alex Johnson"
                                description="Position: Marketer"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamSection;


import React from 'react';
import HeroSection from './components/Home/HeroSection';
import FeatureSection from './components/Home/FeatureSection';

export default function Home() {
	return (
		<>
			<main>
                <HeroSection/>
                <FeatureSection />
            </main>
		</>
	);
}

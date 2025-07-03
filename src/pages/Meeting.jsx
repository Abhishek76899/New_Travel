import React from 'react';
import Home from '../components/Home';
import FeatureSection from '../components/FeatureSection';
import TechnologySection from '../components/TechnologySection';
import TestimonialQuote from '../components/TestimonialQuote';
import IndustryMatch from '../components/IndustryMatch';
import Sustainability from '../components/Sustainability';
import BlogCards from '../components/BlogCards';
import IdeaSection from '../components/IdeaSection';

const Meeting = () => {
  return (
    <div className="font-inter bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 antialiased">

      <main>
        <Home />
        <FeatureSection />
        <TechnologySection />
        <TestimonialQuote />
        <IndustryMatch />
        <Sustainability />
        <BlogCards />
        <IdeaSection />

        {/* Optional: Intro section for special display */}
        {/* <IntroSection /> */}
      </main>
    </div>
  );
};

export default Meeting;

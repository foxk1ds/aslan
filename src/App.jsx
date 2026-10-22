import React from 'react';
import { useLenis } from './hooks/useLenis';
import { ReadingRail } from './components/ReadingRail';
import { SectionColdOpen } from './components/SectionColdOpen';
import { SectionQuestion } from './components/SectionQuestion';
import { SectionTypes } from './components/SectionTypes';
import { SectionCauses } from './components/SectionCauses';
import { SectionCases } from './components/SectionCases';
import { SectionNumbers } from './components/SectionNumbers';
import { SectionSolutions } from './components/SectionSolutions';
import { SectionQuiz } from './components/SectionQuiz';
import { SectionOpinion } from './components/SectionOpinion';
import { SectionSources } from './components/SectionSources';
import { EditorialFooter } from './components/EditorialFooter';

export function App() {
  // Initialize Lenis smooth inertia scrolling
  useLenis();

  return (
    <div className="min-h-screen bg-[#F4F0E8] text-[#111111] antialiased selection:bg-[#B3261E] selection:text-[#F4F0E8]">
      {/* Sticky Chapter Progress Rail */}
      <ReadingRail />

      {/* Main Continuous Long-Form Scrollytelling Story */}
      <main className="w-full">
        {/* 1. Cold Open (Full-screen noir dramatic title reveal) */}
        <SectionColdOpen />

        {/* 2. The Question (Premise & wide-margin essay) */}
        <SectionQuestion />

        {/* 3. Types of Crime (Sticky editorial gallery) */}
        <SectionTypes />

        {/* 4. Causes (Vertical timeline with large dates) */}
        <SectionCauses />

        {/* 5. Three Real Cases (Full-width chapters with mini layouts) */}
        <SectionCases />

        {/* 6. By the Numbers (Big typographic stats & SVG trend line) */}
        <SectionNumbers />

        {/* 7. What Works (Contrasting pairs: failed vs worked) */}
        <SectionSolutions />

        {/* 8. The Quiz (Minimal, large-type one question per screen) */}
        <SectionQuiz />

        {/* 9. My Opinion (Calm wide-margin essay with drop cap & pull quote) */}
        <SectionOpinion />

        {/* 10. Sources (Clean MLA 9th Edition bibliography) */}
        <SectionSources />
      </main>

      {/* Editorial Newsroom Footer */}
      <EditorialFooter />
    </div>
  );
}

export default App;

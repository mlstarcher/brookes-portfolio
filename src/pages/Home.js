import React from 'react';
import Welcome from './Welcome.js';
import CaseStudyCard from './CaseStudyCard.js';
import caseStudyData from '../data/caseStudyData.js';

export default function Home() {
  return (
    <div className="">
      <Welcome />
      <div id="work" className="flex justify-center mb-8">
        <h2 className="sm:text-5xl text-3xl font-bold mb-8 sm:mb-10">
          My Case Studies:
        </h2>
      </div>
      <div>
        {caseStudyData.map((case_study, key) => {
          return <CaseStudyCard case_study={case_study} key={key} />;
        })}
      </div>
    </div>
  );
}

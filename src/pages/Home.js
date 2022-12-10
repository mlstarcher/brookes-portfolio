import React from 'react';
import Welcome from './Welcome.js';
import CaseStudyCard from './CaseStudyCard.js';
import caseStudyData from '../assets/caseStudyData';

export default function Home() {
  return (
    <div>
      <Welcome />
      <div id="work" className="flex justify-center mb-16">
        <h2 className="text-xl">My Case Studies:</h2>
      </div>
      <div>
        {caseStudyData.map((case_study, key) => {
          return <CaseStudyCard case_study={case_study} key={key} />;
        })}
      </div>
    </div>
  );
}

import React from 'react';
import Welcome from './Welcome.js';
import CaseStudyCard from './CaseStudyCard.js';
import caseStudyData from '../assets/caseStudyData.js';
import StudyComingSoon from './StudyComingSoon.js';
import placeholderData from '../assets/placeholderData.js';

export default function Home() {
  return (
    <div className="">
      <Welcome />
      <div id="work" className="flex justify-center mb-8">
        <h2 className="sm:text-5xl text-3xl font-bold sm:mt-16 mt-8">
          My Case Studies:
        </h2>
      </div>
      <div>
        {caseStudyData.map((case_study, key) => {
          return <CaseStudyCard case_study={case_study} key={key} />;
        })}
      </div>
      <div>
        {placeholderData.map((case_study, key) => {
          return <StudyComingSoon case_study={case_study} key={key} />;
        })}
      </div>
    </div>
  );
}

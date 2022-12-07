import React from 'react';
import Welcome from './Welcome.js';
import CaseStudyCard from './CaseStudyCard.js';
import caseStudyData from '../assets/caseStudyData';

export default function Home() {
  return (
    <div className="">
      <Welcome />
      <div id="#work" className="container">
        {caseStudyData.map((case_study, key) => {
          return <CaseStudyCard case_study={case_study} key={key} />;
        })}
      </div>
    </div>
  );
}

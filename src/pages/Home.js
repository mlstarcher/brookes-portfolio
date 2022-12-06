import React from 'react';
import Welcome from './Welcome.js';
import CaseStudyCard from './CaseStudyCard.js';
import caseStudyData from '../assets/caseStudyData';

export default function Home() {
  return (
    <div className="">
      <Welcome />
      <div className="container">
        {caseStudyData.map((caseStudy, key) => {
          return (
            <CaseStudyCard
              title={caseStudy.title}
              short_description={caseStudy.short_description}
              link={caseStudy.link}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

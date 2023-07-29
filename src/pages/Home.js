import React from 'react';
import Welcome from './Welcome.js';
import CaseStudyCard from './CaseStudyCard.js';
import caseStudyData from '../data/caseStudyData.js';

export default function Home() {
  return (
    <div className="">
      <Welcome />
      <div id="work" className="flex justify-center">
        <h2 className="sm:text-6xl text-3xl font-bold mb-10 sm:mb-16">
          My Work:
        </h2>
      </div>
      <div className="grid grid-cols-12">
        {caseStudyData.map((case_study, index) => {
          const isOddIndex = index % 2 === 0;

          return (
            <div className={"col-span-12 " + (isOddIndex ? 'sm:col-start-4 sm:col-end-13' : 'sm:col-start-1 sm:col-end-10')}  key={index}>
              <CaseStudyCard case_study={case_study} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

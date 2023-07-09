import React from 'react';
import ButtonPrimary from './ButtonPrimary.js';

export default function CaseStudyCard({ case_study, index }) {
  const isOddIndex = index % 2 === 0;
  return (
    <div className="flex flex-col md:flex-row md:mb-40 mb-20 drop-shadow-md bg-white sm:py-16 py-10 md:px-12 px-10">
      <div className={"flex flex-col items-center justify-center w-full md:w-1/2 " + (isOddIndex ? 'md:order-first' : 'md:order-last')}>
        <img
          src={case_study.image_name}
          className="w-full h-auto object-contain"
          alt={case_study.alt_tag}
        ></img>
      </div>
      <div className={"flex flex-col items-start w-full md:w-1/2  " + (!isOddIndex ? 'md:order-first' : 'md:order-last')}>
        <h4 className="font-semibold text-2xl text-left md:text-4xl mb-6 md:mb-12">
          {case_study.title}
        </h4>
        <p className="mb-10 text-base text-left md:text-2xl line-clamp-3">
          {case_study.short_description}
        </p>
        <ButtonPrimary text="view case study" location={case_study.link} />
      </div>
    </div>
  );
}

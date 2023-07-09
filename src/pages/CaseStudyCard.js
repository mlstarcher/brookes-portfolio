import React from 'react';
import ButtonPrimary from './ButtonPrimary.js';

export default function CaseStudyCard({ case_study, index }) {
  const isOddIndex = index % 2 === 0;
  return (
    <div className="grid grid-cols-12 sm:grid-cols-9 md:mb-40 mb-20 drop-shadow-md bg-white sm:py-16 py-8">
      <div className={"pr-4 flex col-span-3 " + (isOddIndex ? 'md:order-1 md:col-start-2 md:col-end-6' : 'md:order-2 md:col-start-6 md:col-end-10')}>
        <img
          src={case_study.image_name}
          className="w-full h-auto object-contain"
          alt={case_study.alt_tag}
        ></img>
      </div>
      <div className={"pr-4 flex flex-col items-start col-span-3 " + (!isOddIndex ? 'md:order-1 md:col-start-2 md:col-end-6' : 'md:order-2 md:col-start-6 md:col-end-10')}>
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

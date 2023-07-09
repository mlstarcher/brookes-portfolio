import React from 'react';
import ButtonPrimary from './ButtonPrimary.js';

export default function CaseStudyCard({ case_study, index }) {
  const isOddIndex = index % 2 === 0;
  return (
    <div className="grid grid-cols-9 md:mb-20 mb-10 drop-shadow-md bg-white sm:py-16 py-10">
      <div className={"flex flex-col items-center justify-center col-start-2 col-end-9 " + (isOddIndex ? 'md:col-start-2 md:col-end-5 md:order-1' : 'md:col-start-6 md:col-end-9 md:order-2')}>
        <img
          src={case_study.image_name}
          className="w-full h-auto object-contain mb-4 sm:mb-0 "
          alt={case_study.alt_tag}
        ></img>
      </div>
      <div className={"mb-4 sm:mb-0 flex flex-col items-start col-start-2 col-end-9 " + (!isOddIndex ? 'md:col-start-2 md:col-end-5 md:order-1' : 'md:col-start-6 md:col-end-9 md:order-2')}>
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

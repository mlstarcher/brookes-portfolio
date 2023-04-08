import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function CaseStudyCard({ case_study }) {
  return (
    <div className="grid grid-cols-12 sm:mb-40 mb-24 gap">
      <div className="sm:pr-16 flex justify-center sm:block col-start-2 col-end-7">
        <img
          src={case_study.image_name}
          className="m-w-100 sm:h-auto"
          style={{ 'max-height': '500px' }}
          alt={case_study.alt_tag}
        ></img>
      </div>
      <div className="flex flex-col justify-center col-start-7 col-end-12">
        <h4 className="font-semibold text-2xl text-left sm:text-4xl mb-12  sm:mt-0">
          {case_study.title}
        </h4>
        <p className="mb-10 text-base text-left sm:text-2xl line-clamp-3">
          {case_study.short_description}
        </p>
        <Link
          to={case_study.link}
          className="font-semibold text-accent hover:text-secondary text-2xl"
        >
          <div className="flex items-center">
            <p className="mr-2">View Case Study</p>
            <FaArrowRight className="m-h-5" />
          </div>
        </Link>
      </div>
    </div>
  );
}

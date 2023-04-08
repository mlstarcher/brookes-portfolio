import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function CaseStudyCard({ case_study }) {
  return (
    <div className="grid grid-cols-12 sm:mb-40 mb-20">
      <div className="sm:pr-16 flex justify-center col-span-12 sm:col-start-2 sm:col-end-7 order-2 sm:order-1">
        <img
          src={case_study.image_name}
          className="m-w-100"
          style={{ maxHeight: '500px' }}
          alt={case_study.alt_tag}
        ></img>
      </div>
      <div className="flex flex-col justify-center col-span-12 sm:col-start-7 sm:col-end-12 order-1 sm:order-2">
        <h4 className="font-semibold text-2xl text-left sm:text-4xl mb-6 sm:mb-12">
          {case_study.title}
        </h4>
        <p className="mb-10 text-base text-left sm:text-2xl line-clamp-3">
          {case_study.short_description}
        </p>
        <Link
          to={case_study.link}
          className="font-semibold text-accent hover:text-secondary text-2xl mb-8 sm:mb-0"
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

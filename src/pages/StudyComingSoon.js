import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function StudyComingSoon({ case_study }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:mb-32 mb-16 gap">
      <div className="sm:pr-16 flex justify-center sm:block">
        <img
          src={case_study.image_name}
          className="m-w-100 sm:h-auto h-36"
          alt={case_study.alt_tag}
        ></img>
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-semibold text-3xl sm:text-5xl mb-4 mt-8 sm:mt-0">
          {case_study.title}
        </h4>
        <p className="sm:mb-8 mb-4 text-base sm:text-2xl line-clamp-3">
          {case_study.short_description}
        </p>
        <Link
          to={'coming-soon'}
          className="font-semibold text-accent hover:text-secondary text-xl "
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

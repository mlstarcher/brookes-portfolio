import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function StudyComingSoon({ case_study }) {
  return (
    <div className="grid grid-cols-2 mb-32 gap">
      <div className="pr-16 flex justify-center items-center">
        <img
          src={case_study.image_name}
          className="h-40"
          alt={case_study.alt_tag}
        ></img>
      </div>
      <div className="">
        <h4 className="font-semibold text-2xl mb-4">{case_study.title}</h4>
        <p className="text-2xl mb-8 line-clamp-3">
          {case_study.short_description}
        </p>
        <Link
          to={'coming-soon'}
          className="font-semibold text-accent hover:text-secondary text-xl "
        >
          <div className="flex items-center">
            <p className="mr-2">View Case Study</p>
            <FaArrowRight style={{ height: '20px' }} />
          </div>
        </Link>
      </div>
    </div>
  );
}

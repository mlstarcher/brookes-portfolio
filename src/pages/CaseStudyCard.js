import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function CaseStudyCard({ case_study }) {
  console.log('image_name: ', case_study.image_name);
  return (
    <div className="grid grid-cols-2 mb-32 gap">
      <div className="pr-16">
        <img
          src={case_study.image_name}
          className="w-full"
          alt={case_study.alt_tag}
        ></img>
      </div>
      <div className="">
        <h4 className="font-semibold text-2xl mb-4">{case_study.title}</h4>
        <p className="text-lg mb-8">{case_study.short_description}</p>
        <Link
          to={case_study.link}
          className="font-semibold text-accent text-xl "
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
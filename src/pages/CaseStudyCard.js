import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudyCard({ case_study }) {
  console.log('image_name: ', case_study.image_name);
  return (
    <div className="grid grid-cols-2 mb-32">
      <div>
        <img
          src={case_study.image_name}
          className="h-96"
          alt={case_study.alt_tag}
        ></img>
      </div>
      <div>
        <h4 className="font-semibold text-2xl mb-4">{case_study.title}</h4>
        <p className="text-lg mb-8">{case_study.short_description}</p>
        <Link to={case_study.link}>View Case Study</Link>
      </div>
    </div>
  );
}

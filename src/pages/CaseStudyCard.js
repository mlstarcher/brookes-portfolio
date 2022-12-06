import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudyCard({ title, short_description, link }) {
  return (
    <div className="grid grid-cols-2 mb-16">
      <div>
        <div
          className="border-2 border-gray flex justify-center items-center"
          style={{ height: '300px', width: '300px' }}
        >
          Image Placeholder
        </div>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{short_description}</p>
        <Link to={link}>View Case Study</Link>
      </div>
    </div>
  );
}

import React from 'react';
import coming_soon from '../assets/coming_soon.svg';

export default function CaseStudy1() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap sm:mb-32 mb-16 mt-8">
        <div className="flex flex-col justify-center mb-8 sm:mb-0">
          <h1 className="font-bold md:text-6xl text-2xl pb-4 text-offBlack">
            Cleverist
          </h1>
          <p className="sm:text-2xl text-base">
            A website that helps parents and caregivers find educational
            activities to do with their children at home.
          </p>
        </div>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={coming_soon}
              className="max-w-full sm:h-auto h-48"
              alt="Portrait"
            ></img>
          </div>
        </div>
      </div>
      <div className="bg-accent text-white p-6 grid grid-cols-4 gap-1 rounded-2xl">
        <div className="col-span-1">
          <h4 className="mb-2 font-semibold">Role</h4>
          <p className="text-sm">End-to-end UX/UI designer</p>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 font-semibold">Product</h4>
          <p className="text-sm">Mobile Website</p>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 font-semibold">Duration</h4>
          <p className="text-sm">July to November 2022</p>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 font-semibold">Tools</h4>
          <p className="text-sm">Figma</p>
        </div>
      </div>
      <div className="flex flex-col mt-16 mb-8 px-24">
        {/* <span className="flex justify-center w-full"> */}
        <h3 className="text-3xl text-center font-semibold">Overview</h3>
        {/* </span> */}
        <p className="mt-4 text-start text-sm">
          Cleverist is a fictitious company that{' '}
          <strong>
            makes it simpler for parents and caregivers to find all of the
            information and materials that they need in one place.
          </strong>
        </p>
        <h2 className="text-2xl text-start font-semibold mt-16">The Problem</h2>
        <p className="mt-4 text-start text-sm">
          <strong>
            As a parent or caregiver, finding ways to support a child’s
            education and development from home can be a difficult task.
          </strong>{' '}
          Without a background or degree in Early Childhood Education, it may be
          hard to know how to best support children’s growth and developmental
          milestones.Often, parents and caregivers will search the internet or
          ask their friends and community for recommendations on activities to
          provide for their children. This can be time consuming and lead to
          confusion surrounding the many teaching philosophies or approaches.
          Cleverist researched how to address these pain points.
        </p>
      </div>
    </div>
  );
}

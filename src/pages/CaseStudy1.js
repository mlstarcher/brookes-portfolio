import React from 'react';
import coming_soon from '../assets/coming_soon.svg';

export default function CaseStudy1() {
  return (
    <div className="bg-offWhite">
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
              className="max-w-full h-48"
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
        <h3 className="text-3xl text-center font-semibold">Overview</h3>
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
        <div className="flex flex-col items-center mt-16">
          <p className="text-sm font-semibold" style={{ maxWidth: '200px' }}>
            How might we provide quality educational activities for parents and
            caregivers to do with their children at home?
          </p>
        </div>
        <h2 className="text-2xl text-start font-semibold mt-16">
          The Solution
        </h2>
        <p className="mt-4 text-start text-sm">
          A responsive mobile site where parents and caregivers can:
          <ul className="list-disc pl-4">
            <li>
              Search for educational activities using filters such as age,
              duration, and subject.
            </li>
            <li>Save, share, and print educational activities.</li>
            <li>
              Purchase materials needed for activities via affiliate links.
            </li>
          </ul>
        </p>
        <h2 className="text-2xl text-start font-semibold mt-16">
          Design Thinking Process
        </h2>
        <img src={coming_soon} className="max-w-full h-24" alt="Portrait"></img>
        <h3 className="text-3xl text-center font-semibold mt-16">Research</h3>
        <p className="mt-4 text-start text-sm">
          My goal was to understand the experience that parents or caregivers
          have when trying to facilitate educational activities for their
          children at home. I made a research plan to find out what materials
          and information parents and caregivers were interested in seeing in an
          Educational Activity Resource. I looked at the current competition to
          see what they offered, and kept that in mind during user interviews.
        </p>
        <h2 className="text-2xl text-start font-semibold mt-16">
          Looking at the competition
        </h2>
        <p className="mt-4 text-start text-sm">
          All of the competitor services offered educational activities, but the
          subscription services tended to be costly and not backed by
          educational resources. The non subscription service had lots of
          information about child development, but not an easy way to produce
          materials for the activities, or clear directions.
        </p>
      </div>
      <div className="bg-primary p-6 grid grid-cols-3 gap-1 rounded-2xl">
        <div className="col-span-1 flex flex-col items-center px-6">
          <img
            src={coming_soon}
            className="max-w-full h-24"
            alt="Portrait"
          ></img>
          <p className="text-sm">
            Free access to media content and community based experiences that
            support learning for young children.
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center  px-6">
          <img
            src={coming_soon}
            className="max-w-full h-24"
            alt="Portrait"
          ></img>
          <p className="text-sm">
            Subscriptions for kids that inspire them to learn about the world
            through toys and activities.
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center  px-6">
          <img
            src={coming_soon}
            className="max-w-full h-24"
            alt="Portrait"
          ></img>
          <p className="text-sm">
            Subscription box with materials to inspire natural creativity, while
            helping parents who want to bring enriching experiences to their
            children.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-16 mb-8 px-24">
        <h2 className="text-2xl text-start font-semibold">
          Hearing People's Stories
        </h2>
        <p className="mt-4 text-start text-sm">
          I held 1:1 user interviews witrh three research participants to learn
          about their needs and pain points when looking for educational
          activities to do with their children. I learned that{' '}
          <strong>
            the main concerns were time, quality, and availability.
          </strong>
        </p>
        <div className="mt-8 grid grid-cols-6">
          <div className="col-span-1">
            <img
              src={coming_soon}
              className="max-w-full h-24"
              alt="Portrait"
            ></img>
          </div>
          <div className="col-span-5">
            <p className="text-left text-sm pl-8">
              Parents and caregivers are often busy with their child’s schedule
              as well as their own. Finding activities quickly and easily is
              important.
            </p>
          </div>
          <div className="col-span-1">
            <img
              src={coming_soon}
              className="max-w-full h-24"
              alt="Portrait"
            ></img>
          </div>
          <div className="col-span-5">
            <p className="text-left text-sm pl-8">
              Parents and caregivers are often busy with their child’s schedule
              as well as their own. Finding activities quickly and easily is
              important.
            </p>
          </div>
          <div className="col-span-1">
            <img
              src={coming_soon}
              className="max-w-full h-24"
              alt="Portrait"
            ></img>
          </div>
          <div className="col-span-5">
            <p className="text-left text-sm pl-8">
              Parents and caregivers do not often have the materials necessary
              for an activity available at home. A link to an itemized online
              shopping list would make this more convenient.
            </p>
          </div>
        </div>
        <div className="mt-8 text-left">
          <p className="text-sm mb-8">Some key quotes were:</p>
        </div>
        <div className="flex mb-8">
          <div
            className="bg-accent rounded mr-4"
            style={{ width: '10px' }}
          ></div>
          <p className="text-left text-sm">
            <strong>
              “ Time is the biggest issue. Also just not knowing what to do and
              ending up putting out crayons and paper for the millionth time. I
              don’t know how all these pinterest moms do it. ”
            </strong>
          </p>
        </div>
        <div className="flex mb-8">
          <div
            className="bg-accent rounded mr-4"
            style={{ width: '10px' }}
          ></div>
          <p className="text-left text-sm">
            <strong>
              “ It is hard coming up with new ideas or ideas that are as good as
              what they have already done at school, since those activities have
              more philosophy in place. ”
            </strong>
          </p>
        </div>
        <div className="flex mb-8">
          <div
            className="bg-accent rounded mr-4"
            style={{ width: '10px' }}
          ></div>
          <p className="text-left text-sm">
            <strong>
              “ Time spent sourcing materials takes away from the time we have
              to do activities together, We often default to ordering things on
              Amazon for efficiency. We like to be able to re-order things we
              liked. ”
            </strong>
          </p>
        </div>
        <div className="flex flex-col items-center mt-16">
          <p className="text-sm font-semibold" style={{ maxWidth: '200px' }}>
            How might we provide educational activities for parents and
            caregivers that are also time efficient?
          </p>
        </div>
        <h3 className="text-3xl text-center font-semibold mt-16">Define</h3>
        <p className="mt-4 text-start text-sm">
          Before coming up with a design to solve this problem, I needed to
          further define our target user and find out what their wants and needs
          would be for this product. Meet our user Megan. Megan is a work at
          home/stay at home mom who wants to provide enriching educational
          activities for her children to do at home, understand the educational
          reasoning behind the activities, and participate in the activities
          with her children.
        </p>
        <h2 className="text-2xl text-start font-semibold mt-16">Meet Megan</h2>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={coming_soon}
              className="max-w-full h-48"
              alt="Portrait"
            ></img>
          </div>
        </div>
        <h2 className="text-2xl text-start font-semibold mt-16">
          Determining the Problems to Solve
        </h2>
        <p className="mt-4 text-start text-sm">
          With the needs of our user identified, it was clear that there was a
          need for an educational activity resource that{' '}
          <strong>was quick and easy to use,</strong> and that gave a{' '}
          <strong>simple solution for gathering materials</strong> for each
          activity.
        </p>
        <p className="mt-4 text-start text-sm">
          The next question was: how can these goals be achieved with Cleverist?
          Since one of the biggest pain points was time, I wanted to ensure that
          the site’s design was <strong>easy to understand,</strong> and
          organized in a way that made it as <strong>time efficient</strong> as
          possible.
        </p>
        <h2 className="text-2xl text-start font-semibold mt-16">
          Finding the Flow
        </h2>
        <p className="mt-4 text-start text-sm">
          With the user’s problems in mind, the next steps were to determine our
          feature set, create a site map, and user flows. These tools helped
          give scaffolding to the design of the product.
        </p>
        <div className="flex flex-col items-center mt-16">
          <p className="text-sm font-semibold" style={{ maxWidth: '200px' }}>
            How might we provide a space that gives parents and caregivers to
            access materials for educational activities?
          </p>
        </div>
        <p className="mt-16 text-start text-sm">
          The <strong>feature set</strong> shown here helped me to narrow in on
          which of our desired features were must-haves for a minimum viable
          product, versus which features would be nice but could be added in
          later iterations of the product. I chose the features in P1 and P2
          based primarily on feedback from user interviews. The participants
          expressed wanting the ability to share/print/download the activities,
          as well as view and leave comments. The more basic features were added
          based on competitor analysis.
        </p>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={coming_soon}
              className="max-w-full h-48"
              alt="Portrait"
            ></img>
          </div>
        </div>
        <p className="mt-16 text-start text-sm">
          The <strong>sitemap</strong> was built by considering the feature set
          and how it could be best applied for quick and easy navigation. The
          Log In and Search icons area separated from the navigation and on the
          same level as the logo at the top of the screen. The navigation
          consists of drop downs for Account, About, Community, and Activities.
          Each of those navigation points expands further to include more
          detailed options.
        </p>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={coming_soon}
              className="max-w-full h-48"
              alt="Portrait"
            ></img>
          </div>
        </div>
        <p className="mt-16 text-start text-sm">
          These <strong>user flows</strong> helped determine exactly the
          Cleverist user would go about creating an account, and how to find and
          save an activity. Both of which were very important to the design of
          the site. I wanted to work out which steps the user would take to
          complete these tasks, and what options would be available along the
          way. For Account Creation, we start with the assumption that the user
          potentially has an account, and if not they can choose the option to
          make one. For Finding an Activity, the user can either use the search
          bar to find an activity, or choose to browse activities using filters.
          The filters within the Activities area of navigation were originally
          By Age, By Interest, and By Time. Along the way I received feedback
          from critiques and usability tests and the filters were changed to
          Age, Subject, and Duration for clarity.
        </p>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={coming_soon}
              className="max-w-full h-48"
              alt="Portrait"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

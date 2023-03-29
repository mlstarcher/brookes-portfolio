import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import cleverist_image1 from '../assets/cleverist_image1.png';
import cleverist_iphone from '../assets/cleverist_iphone.png';
import color_mixing from '../assets/color_mixing.png';
import early_sketches from '../assets/early_sketches.png';
import mid_fi_wire_frames from '../assets/mid_fi_wire_frames.png';
import hi_fi_wire_frames from '../assets/hi_fi_wire_frames.png';
import how_might_we1 from '../assets/how_might_we1.png';
import how_might_we2 from '../assets/how_might_we2.png';
import how_might_we3 from '../assets/how_might_we3.png';
import learn_grow_sitemap1 from '../assets/learn_grow_sitemap1.png';
import mood_board_w_color_pallette1 from '../assets/mood_board_w_color_pallette1.png';
import user_flows from '../assets/user_flows.png';
import user_persona1 from '../assets/user_persona1.png';
import design_thinking_image from '../assets/design_thinking_image.png';
import feature_set from '../assets/feature_set.png';
import analyzing_results1 from '../assets/analyzing_results1.png';
import activity_filters from '../assets/activity_filters.png';
import quality from '../assets/quality.png';
import time from '../assets/time.png';
import availability from '../assets/availability.png';
import kiwico from '../assets/kiwico.png';
import pbs_kids from '../assets/pbs_kids.png';
import little_passports from '../assets/little_passports.png';
import comments from '../assets/comments.png';

export default function CaseStudy1() {
  return (
    <div className="bg-offWhite">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap sm:mb-16 mb-16 mt-8">
        <div className="flex flex-col justify-center items-center mb-8 sm:mb-0">
          <h1 className="font-bold text-3xl sm:text-6xl text-offBlack pb-4">
            Cleverist
          </h1>
          <p className="text-lg sm:text-2xl text-center px-8">
            A website that helps parents and caregivers find educational
            activities to do with their children at home.
          </p>
          <Link
            to={
              'https://www.figma.com/file/Ezh6ISzgp5C1WpG1js5Myz/Cleverist-Prototypes?node-id=0%3A1&t=BzMBsCR7T6rMBXQM-1'
            }
            className="font-semibold text-accent hover:text-secondary text-lg sm:text-2xl pointer"
          >
            <div className="flex items-center mt-4">
              <p className="mr-2">View Prototype</p>
              <FaArrowRight className="m-h-5" />
            </div>
          </Link>
        </div>
        <div className="flex items-center mb-16 h-auto">
          <img
            src={cleverist_image1}
            className="max-w-full"
            alt="Mobile Preview"
          ></img>
        </div>
      </div>
      <div className="bg-accent text-white px-6 py-8 grid grid-cols-1 sm:grid-cols-4 gap-1 rounded-2xl">
        <div className="col-span-1 sm:mb-0 mb-8">
          <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Role</h4>
          <p className="text-lg sm:text-2xl">End-to-end UX/UI designer</p>
        </div>
        <div className="col-span-1 sm:mb-0 mb-8">
          <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Product</h4>
          <p className="text-lg sm:text-2xl">Mobile Website</p>
        </div>
        <div className="col-span-1 sm:mb-0 mb-8">
          <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Duration</h4>
          <p className="text-lg sm:text-2xl">July to November 2022</p>
        </div>
        <div className="col-span-1">
          <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Tools</h4>
          <p className="text-lg sm:text-2xl">Figma</p>
        </div>
      </div>
      <div className="flex flex-col mt-16 mb-8 sm:px-24">
        <h3 className="text-3xl sm:text-6xl text-center font-semibold">
          Overview
        </h3>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          Cleverist is a fictitious company that{' '}
          <strong>
            makes it simpler for parents and caregivers to find all of the
            information and materials that they need in one place.
          </strong>
        </p>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold mt-16">
          The Problem
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
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
          <img
            src={how_might_we1}
            className="max-w-full h-auto"
            alt="Mobile Preview"
          ></img>
        </div>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold mt-16">
          The Solution
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
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
        <h2 className="text-2xl sm:text-4xl text-start font-semibold mt-16">
          Design Thinking Process
        </h2>
        <img
          src={design_thinking_image}
          className="max-w-full h-auto mt-8"
          alt="Research, define, design, test"
        ></img>
        <h3 className="text-3xl sm:text-6xl text-center font-semibold mt-16">
          Research
        </h3>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          My goal was to understand the experience that parents or caregivers
          have when trying to facilitate educational activities for their
          children at home. I made a research plan to find out what materials
          and information parents and caregivers were interested in seeing in an
          Educational Activity Resource. I looked at the current competition to
          see what they offered, and kept that in mind during user interviews.
        </p>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold mt-16">
          Looking at the competition
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          All of the competitor services offered educational activities, but the
          subscription services tended to be costly and not backed by
          educational resources. The non subscription service had lots of
          information about child development, but not an easy way to produce
          materials for the activities, or clear directions.
        </p>
      </div>
      <div className="bg-primary p-6 grid sm:grid-cols-3 grid-cols-1 gap-1 rounded-2xl">
        <div className="col-span-1 flex flex-col items-center px-6">
          <div className="flex items-center" style={{ height: '114px' }}>
            <img
              src={pbs_kids}
              className="max-w-full h-auto"
              alt="PBS Kids logo"
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Free access to media content and community based experiences that
            support learning for young children.
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center  px-6">
          <div className="flex items-center" style={{ height: '114px' }}>
            <img
              src={little_passports}
              className="max-w-full h-auto"
              alt="Little Passports logo"
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Subscriptions for kids that inspire them to learn about the world
            through toys and activities.
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center  px-6">
          <div className="flex items-center" style={{ height: '114px' }}>
            <img
              src={kiwico}
              className="max-w-full h-auto"
              alt="Kiwico Logo"
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Subscription box with materials to inspire natural creativity, while
            helping parents who want to bring enriching experiences to their
            children.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-16 mb-8 sm:px-24">
        <h2 className="text-2xl sm:text-4xl text-start font-semibold">
          Hearing People's Stories
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          I held 1:1 user interviews with three research participants to learn
          about their needs and pain points when looking for educational
          activities to do with their children. I learned that{' '}
          <strong>
            the main concerns were time, quality, and availability.
          </strong>
        </p>
        <div className="mt-8 grid grid-cols-12">
          <div className="col-span-3 mb-4">
            <img src={time} className="max-w-full h-auto" alt="time"></img>
          </div>
          <div className="col-span-9 mb-4">
            <p className="text-left text-lg sm:text-2xl pl-8">
              Parents and caregivers are often busy with their child’s schedule
              as well as their own. Finding activities quickly and easily is
              important.
            </p>
          </div>
          <div className="col-span-3 mb-4">
            <img
              src={quality}
              className="max-w-full h-auto"
              alt="Quality"
            ></img>
          </div>
          <div className="col-span-9 mb-4">
            <p className="text-left text-lg sm:text-2xl pl-8">
              Parents and caregivers are often busy with their child’s schedule
              as well as their own. Finding activities quickly and easily is
              important.
            </p>
          </div>
          <div className="col-span-3 mb-4">
            <img
              src={availability}
              className="max-w-full h-auto"
              alt="Availability"
            ></img>
          </div>
          <div className="col-span-9 mb-4">
            <p className="text-left text-lg sm:text-2xl pl-8">
              Parents and caregivers do not often have the materials necessary
              for an activity available at home. A link to an itemized online
              shopping list would make this more convenient.
            </p>
          </div>
        </div>
        <div className="mt-8 text-left">
          <p className="text-lg sm:text-2xl mb-8">Some key quotes were:</p>
        </div>
        <div className="flex mb-8">
          <div
            className="bg-accent rounded mr-4"
            style={{ width: '8px' }}
          ></div>
          <p className="text-left text-lg sm:text-2xl">
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
            style={{ width: '8px' }}
          ></div>
          <p className="text-left text-lg sm:text-2xl">
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
            style={{ width: '8px' }}
          ></div>
          <p className="text-left text-lg sm:text-2xl">
            <strong>
              “ Time spent sourcing materials takes away from the time we have
              to do activities together, We often default to ordering things on
              Amazon for efficiency. We like to be able to re-order things we
              liked. ”
            </strong>
          </p>
        </div>
        <div className="flex flex-col items-center mt-16">
          <img
            src={how_might_we2}
            className="max-w-full h-auto"
            alt="Mobile Preview"
          ></img>
        </div>
        <h3 className="text-3xl sm:text-6xl text-center font-semibold mt-16">
          Define
        </h3>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          Before coming up with a design to solve this problem, I needed to
          further define our target user and find out what their wants and needs
          would be for this product. Meet our user Megan. Megan is a work at
          home/stay at home mom who wants to provide enriching educational
          activities for her children to do at home, understand the educational
          reasoning behind the activities, and participate in the activities
          with her children.
        </p>

        <div className="flex justify-center items-center sm:mb-0">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl text-left font-semibold mt-16 mb-8">
              Meet Megan
            </h2>
            <div>
              <img
                src={user_persona1}
                className="max-w-full h-auto"
                alt="User Persona One"
              ></img>
            </div>
          </div>
        </div>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold mt-16">
          Determining the Problems to Solve
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          With the needs of our user identified, it was clear that there was a
          need for an educational activity resource that{' '}
          <strong>was quick and easy to use,</strong> and that gave a{' '}
          <strong>simple solution for gathering materials</strong> for each
          activity.
        </p>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          The next question was: how can these goals be achieved with Cleverist?
          Since one of the biggest pain points was time, I wanted to ensure that
          the site’s design was <strong>easy to understand,</strong> and
          organized in a way that made it as <strong>time efficient</strong> as
          possible.
        </p>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold mt-16">
          Finding the Flow
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          With the user’s problems in mind, the next steps were to determine our
          feature set, create a site map, and user flows. These tools helped
          give scaffolding to the design of the product.
        </p>
        <div className="flex flex-col items-center mt-16">
          <img
            src={how_might_we3}
            className="max-w-full h-auto"
            alt="Mobile Preview"
          ></img>
        </div>
        <p className="mt-16 text-start text-lg sm:text-2xl">
          The <strong>feature set</strong> shown here helped me to narrow in on
          which of our desired features were must-haves for a minimum viable
          product, versus which features would be nice but could be added in
          later iterations of the product. I chose the features in P1 and P2
          based primarily on feedback from user interviews. The participants
          expressed wanting the ability to share/print/download the activities,
          as well as view and leave comments. The more basic features were added
          based on competitor analysis.
        </p>
        <div className="flex justify-center items-center mb-8 sm:mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={feature_set}
              className="max-w-full h-auto"
              alt="Feature Set"
            ></img>
          </div>
        </div>
        <p className="mt-16 text-start text-lg sm:text-2xl">
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
              src={learn_grow_sitemap1}
              className="max-w-full h-auto"
              alt="Site Map"
            ></img>
          </div>
        </div>
        <p className="mt-16 text-start text-lg sm:text-2xl">
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
              src={user_flows}
              className="max-w-full h-auto"
              alt="User Flows"
            ></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8 sm:px-24 px-6 rounded-2xl bg-primary">
        <h3 className="text-3xl sm:text-6xl text-center font-semibold mt-8">
          Design
        </h3>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          After determining my information architecture, i got to work creating
          concept sketches and worked on branding using Cleverist’s core values.
          Using the sketches and branding, I moved on to wireframes to develop a
          more complete design. I tried to focus on how the user interface could
          be most time efficient for our user, while still providing a
          <strong>delightful and inspiring experience.</strong>
        </p>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold mt-16">
          Early Sketches
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          I began with some <strong>low fidelity</strong> concept sketches to
          get an idea of how things would look. While these were a great place
          to start, there was still a lot of UI work to do to pull it together.
          In these early sketches, the focus was seeing how the flows would be
          applied to the mobile site. I wanted to see where each step of the
          flow would take the use. Starting with the navigation (hamburger
          menu), choosing activities, then interest and finally art. From there
          I laid out how the filtered activities would appear to the user, and
          how an activity page would look once one activity was chosen.
        </p>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={early_sketches}
              className="max-w-full h-auto"
              alt="Early Sketches"
            ></img>
          </div>
        </div>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold sm:mt-16">
          Branding
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          With a general idea of how the site could be laid out, the next piece
          was deciding how I would communicate the Cleverist values using
          inspiration, color pallette, and logo. I chose to use colors that were
          a playful spin on primary colors so often seen in children’s products.
          The core values that I wanted to communicate with the overall branding
          were:
          <ul className="list-disc pl-4">
            <li>Inspiring</li>
            <li>Playful</li>
            <li>Creative</li>
            <li>Enriching</li>
            <li>Approachable</li>
          </ul>
        </p>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={mood_board_w_color_pallette1}
              className="max-w-full h-auto"
              alt="Mood Board"
            ></img>
          </div>
        </div>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold sm:mt-16">
          Mid Fidelity Wireframes
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          Based on the sketches, I created mid fidelity,{' '}
          <strong>responsive wireframes </strong> across mobile and desktop so
          that users could access the site on different devices and have a
          consistent experience. I like to think of these as the blueprint
          stage. One main detail that was built apon was how the filters would
          be applied, at this stage in the design I chose to makethe filters in
          a checklist style rather than a braod drop down category so that the
          user could choose multiple filter options.
        </p>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={mid_fi_wire_frames}
              className="max-w-full h-auto"
              alt="Mid fi wire frames"
            ></img>
          </div>
        </div>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold sm:mt-16">
          High Fidelity UI
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          This step is where the design really came together visually. I was
          able to fully design the Cleverist site while keeping our persona,
          Megan in mind. A combination of custom made icons and real imagery
          gave the site the exact feel we were going for in a way that was
          simple, clean, and time efficient.
        </p>
        <Link
          to={
            'https://www.figma.com/file/jqZaAtwzFzrSrt6Mb1nqRA/Cleverist-Wireframes?node-id=1%3A3&t=05AJXlKrrTlhUCzR-1'
          }
          className="font-semibold text-accent hover:text-secondary text-lg sm:text-2xl pointer"
        >
          <div className="flex items-center mt-4">
            <p className="mr-2">View all designs in Figma</p>
            <FaArrowRight className="m-h-5" />
          </div>
        </Link>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div className="mb-8">
            <img
              src={hi_fi_wire_frames}
              className="max-w-full h-auto"
              alt="Hi fi wire frames"
            ></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-16 mb-8 sm:px-24 px-6">
        <h3 className="text-3xl sm:text-6xl text-center font-semibold">Test</h3>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          At the end of the visual design portion came one of the most important
          parts of the Cleverist design process - testing. I felt confident
          about my overall design but conducting usability tests using the Figma
          prototype would give clarity and inform my further iterations.
        </p>
        <Link
          to={
            'https://www.figma.com/file/Ezh6ISzgp5C1WpG1js5Myz/Cleverist-Prototypes?node-id=0%3A1&t=BzMBsCR7T6rMBXQM-1'
          }
          className="font-semibold text-accent hover:text-secondary text-lg sm:text-2xl pointer"
        >
          <div className="flex items-center mt-4">
            <p className="mr-2">View Prototype</p>
            <FaArrowRight className="m-h-5" />
          </div>
        </Link>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold mt-16">
          Usability Testing
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          I conducted usability testing sessions to test the homepage, the
          process of creating an account, and the process of finding and saving
          an activity using filters. I held usability testing sessions with
          three participants and documented all feedback.
        </p>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          The usability test goals were:
          <ul className="list-disc pl-4">
            <li>
              To evaluate wether the prototype allows users to quickly and
              effectively complete the task flows that the wireframes were
              created for.
            </li>
            <li>
              To determine if there were design issues that required iteration.
            </li>
          </ul>
        </p>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          The usability <strong>tests were considered successful</strong>{' '}
          because all of the users could quickly and effectively complete the
          task flows that the wireframes were created for. Some feedback was
          given for future iterations which will be applied to make the
          Cleverist site even easier and more delightful to use.
        </p>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={cleverist_iphone}
              className="max-w-full h-auto"
              alt="Cleverist iphone preview"
            ></img>
          </div>
        </div>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold sm:mt-16">
          Analyzing & Prioritizing Results
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          I took the <strong>insights</strong> from the usability testing
          sessions and organized them in a way that would show what worked, what
          could change, what questions the participants had, and their
          additional ideas. This organization helped me visualize{' '}
          <strong>design opportunities</strong> and{' '}
          <strong>potential next steps.</strong>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8">
          <div className="col-span-1">
            <p className="font-semibold text-lg sm:text-2xl text-left">
              What Worked:
              <ul className="list-disc pl-4 mt-4 pr-4">
                <li>Familiar and easy to navigate.</li>
                <li>
                  Colors, illustrations, typeface, and other UI were clean and
                  minimal while remaining playful and interesting.
                </li>
                <li>Tasks were intuitive and easy to complete.</li>
                <li>Information provided was detailed and comprehensive.</li>
              </ul>
            </p>
          </div>
          <div className="col-span-1 mt-8 sm:mt-0">
            <p className="font-semibold text-lg sm:text-2xl text-left">
              What Could Change:
              <ul className="list-disc pl-4 mt-4">
                <li>Users felt there should be a button to apply filters.</li>
                <li>
                  Users wanted a heart or save icon on activities to allow
                  activities to be saved to library.
                </li>
                <li>
                  Users wanted to see an area where they could leave a comment
                  on an activity.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mb-16 mt-8 sm:mb-0">
          <div>
            <img
              src={analyzing_results1}
              className="max-w-full h-auto"
              alt="Analyzing results"
            ></img>
          </div>
        </div>
        <h2 className="text-2xl sm:text-4xl text-start font-semibold sm:mt-16">
          Final Iterations
        </h2>
        <p className="mt-4 text-start text-lg sm:text-2xl">
          Based on the test results, I made some priority revisions throughout
          the site based on how impactful it would be and how it would fit into
          the time frame I had. Below are the main revisions that were made.
        </p>
        <ul className="list-disc pl-4 font-semibold text-lg sm:text-2xl text-left">
          <li className="mt-4">
            Button at the end of filter section to allow the user to apply
            filters rather than clicking “X”.
            <div className="flex justify-center items-center mt-4 sm:mb-0">
              <div>
                <img
                  src={activity_filters}
                  className="max-w-full h-auto"
                  alt="Activity Filters"
                ></img>
              </div>
            </div>
          </li>
          <li className="mt-4">
            Button at the end of filter section to allow the user to apply
            filters rather than clicking “X”.
            <div className="flex justify-center items-center mt-4 sm:mb-0">
              <div>
                <img
                  src={color_mixing}
                  className="max-w-full h-auto"
                  alt="Color Mixing"
                ></img>
              </div>
            </div>
          </li>
          <li className="mt-4">
            On the Activity page, “Leave a Comment” section added before the
            existing comments from other users.
            <div className="flex justify-center items-center mb-16 mt-4 sm:mb-0">
              <div>
                <img
                  src={comments}
                  className="max-w-full h-auto"
                  alt="Comments"
                ></img>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-16 sm:px-24 px-6 rounded-2xl bg-secondary">
        <h3 className="text-3xl sm:text-6xl text-center font-semibold mt-8">
          Next Steps
        </h3>
        <p className="mt-4 text-start text-lg sm:text-2xl mb-8">
          With more time, the next steps I would take on this design project
          would be:
          <ul className="list-disc pl-4 font-semibold">
            <li>Creating an “add your own activity” feature.</li>
            <li>Design features for the Community section.</li>
            <li>Add a FAQ section.</li>
            <li>Continue to test and iterate.</li>
          </ul>
        </p>
      </div>
      <div className="flex flex-col mt-16 sm:px-24 px-6 rounded-2xl bg-accent mb-16 text-white">
        <h3 className="text-3xl sm:text-6xl text-center font-semibold mt-8">
          Learnings & Final Thoughts
        </h3>
        <p className="mt-4 text-left text-lg sm:text-2xl">
          This was my first real UI/UX design project that I have worked on and
          I learned so much from it.My main growth came in the areas of tool
          sets (primarily Figma), and seeing a project from start to finish.
        </p>
        <p className="mt-4 text-left text-lg sm:text-2xl">
          I also learned how I would like to continue to improve as a designer,.
          After experiencing the entire design thinking process, I have a much
          better idea how to organize projects and at which stages to seek
          critique and feedback.
        </p>
        <p className="mt-4 text-left text-lg sm:text-2xl">
          This was certainly an accelerated version of the Ui/UX design process,
          and there are some things I would have pursued further if given more
          time. I would have liked to see how the further iterations of my
          design took shape, and how they would evolve through prototyping and
          testing.
        </p>
        <p className="mt-4 text-left text-lg sm:text-2xl mb-8">
          Although this project was new and sometimes challenging, I truly
          enjoyed the challenge and feel that I will continue to stay curious
          about the process and grow as a designer.
        </p>
      </div>
    </div>
  );
}

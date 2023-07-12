import React from 'react';
import ButtonPrimary from '../ButtonPrimary';

export default function Cleverist() {
  return (
    <div className="bg-offWhite mt-16 sm:mt-32">
      {/* Intro and App Preview */}
      <div className="grid grid-cols-12 mb-10 sm:mb-20">
        <div className="flex flex-col  justify-center mb-6 sm:mb-12 sm:mb-0 col-span-12 sm:col-start-2 sm:col-end-7">
          <h1 className="font-bold text-3xl sm:text-6xl text-offBlack mb-10">
            Cleverist
          </h1>
          <p className="text-lg sm:text-2xl text-center">
            A <span className="text-secondary">website</span> that helps parents
            and
            <br /> caregivers find{' '}
            <span className="text-secondary">educational activities</span>
            <br />to do with their children at home.
          </p>
          <div className='mt-10'>
            <ButtonPrimary text={'view prototype'} location={'https://www.figma.com/file/Ezh6ISzgp5C1WpG1js5Myz/Cleverist-Prototypes?node-id=0%3A1&t=BzMBsCR7T6rMBXQM-1'} type={'external'} className="mt-20" />
          </div>
        </div>
        <div className="flex flex-col items-center col-span-12 sm:col-span-3 sm:col-start-8">
          <div className="relative mt-8 sm:mt-0" style={{ height: '600px', width: '300px' }}>
            <img
              role="presentation"
              className="absolute z-10 pointer-events-none h-full w-auto"
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/global/iphone_transparent.png'}
              alt="iPhone 14"
            ></img>
            <div
              className="mx-4 mb-0 hide-scrollbar rounded-lg iphone"
              style={{ marginTop: '14px' }}
            >
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/mobile_preview.jpg'}
                className="max-w-full h-auto wireframe"
                alt="Preview of final design for mobile"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* Role details */}
      <div className="bg-secondary py-10 sm:py-20 grid grid-cols-12  mb-16 sm:mb-16 sm:mb-32 drop-shadow-md">
        <div className='flex justify-between flex-col sm:flex-row col-start-3 col-end-11'>
          <div className="">
            <p className="mb-2 font-semibold text-2xl sm:text-3xl">Role</p>
            <p className="text-lg sm:text-2xl mb-8 sm:mb-0">
              UX/UI Designer
            </p>
          </div>
          <div className="">
            <p className="mb-2 font-semibold text-2xl sm:text-3xl">Product</p>
            <p className="text-lg sm:text-2xl mb-8 sm:mb-0">Mobile Website</p>
          </div>
          <div className="">
            <p className="mb-2 font-semibold text-2xl sm:text-3xl">Duration</p>
            <p className="text-lg sm:text-2xl mb-8 sm:mb-0">
              July to Nov 2022
            </p>
          </div>
          <div className="">
            <p className="mb-2 font-semibold text-2xl sm:text-3xl">Tools</p>
            <p className="text-lg sm:text-2xl">Figma</p>
          </div>
        </div>
      </div>
      {/* Overview */}
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Overview
          </h3>
          <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            Cleverist is a fictitious company that{' '}
            <strong>
              makes it simpler for parents and caregivers to find all of the
              information and materials that they need in one place.
            </strong>
          </p>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            The Problem
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            <strong>
              As a parent or caregiver, finding ways to support a child’s
              education and development from home can be a difficult task.
            </strong>{' '}
            Without a background or degree in Early Childhood Education, it may be hard to know how to best support children’s growth and developmental milestones. Often, parents and caregivers will search the internet or ask their friends and community for recommendations on activities to provide for their children. This can be time consuming and lead to confusion surrounding the many teaching philosophies or approaches. Cleverist researched how to address these pain points.
          </p>
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/how_might_we1.png'}
              className="h-auto w-full"
              style={{ maxWidth: '630px' }}
              alt="How might we provide quality educational activities for parents and caregivers to do with their children at home?"
            ></img>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            The Solution
          </h2>
          <div className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            <p>A responsive mobile site where parents and caregivers can:</p>
            <ul className="list-disc ml-8">
              <li>
                Search for educational activities using filters such as age,
                duration, and subject.
              </li>
              <li>Save, share, and print educational activities.</li>
              <li>
                Purchase materials needed for activities via affiliate links.
              </li>
            </ul>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-10 sm:mb-20">
            Design Thinking Process
          </h2>
          <img
            src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/design_thinking.png'}
            className="max-w-full h-auto mb-16 sm:mb-32"
            alt="Research, define, design, test"
          ></img>
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Research
          </h3>
          <p className="mb-16 sm:mb-32 text-start text-lg sm:text-2xl">
            My goal was to understand the experience that parents or caregivers have when trying to facilitate educational activities for their children at home. I made a research plan to find out what materials and information parents and caregivers were interested in seeing in an Educational Activity Resource. I looked at the current competition to see what they offered, and kept that in mind during user interviews.
          </p>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Looking at the competition
          </h2>
          <p className=" text-start text-lg sm:text-2xl mb-10 sm:mb-20">
            All of the competitor services offered educational activities, but the subscription services tended to be costly and not backed by educational resources. The non subscription service had lots of information about child development, but not an easy way to produce materials for the activities, or clear directions.
          </p>
        </div>
      </div>
      {/* Competition Card */}
      <div className="bg-primary p-20 grid grid-cols-12  mb-16 sm:mb-32 drop-shadow-md">
        <div className="col-span-12 sm:col-start-2 sm:col-end-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/pbs.png'}
                className="object-cover w-full"
                style={{ height: '94px' }}
                alt="PBS Kids logo"
              ></img>
            </div>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Free access to media content and community based experiences that
            support learning for young children.
          </p>
        </div>
        <div className="col-span-12 sm:col-start-8 sm:col-end-12">
          <div className="flex flex-col items-center mt-10 sm:mt-0">
            <div className="flex items-center">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/kiwico.png'}
                className="object-cover w-full"
                style={{ height: '94px' }}
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
        <div className="col-span-12 sm:col-start-5 sm:col-end-9">
        <div className="flex flex-col items-center mt-10 sm:mt-16">
            <div className="flex items-center">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/little_passports.png'}
                className="object-cover w-full"
                alt="Little Passports logo"
                style={{ height: '94px' }}
              ></img>
            </div>
            <p className="text-lg sm:text-2xl mt-4">
              Subscriptions for kids that inspire them to learn about the world
              through toys and activities.
            </p>
          </div>
        </div>
      </div>
      {/* Hearing Peoples Stories */}
      <div className="grid grid-cols-12 mt-8 sm:mt-16">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Hearing People's Stories
          </h2>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
            I held 1:1 user interviews with three research participants to learn
            about their needs and pain points when looking for educational
            activities to do with their children. I learned that{' '}
            <strong>
              the main concerns were time, quality, and availability.
            </strong>
          </p>
          <div className="grid grid-cols-12 mb-10 sm:mb-20">
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-12 flex sm:block justify-center sm:justify-start">
              <img src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/time.png'} className="max-w-full" alt="time"></img>
            </div>
            <div className="col-span-12 sm:col-span-9 mb-6 sm:mb-12">
              <p className="text-left text-lg sm:text-2xl pl-0 sm:pl-4">
                Parents and caregivers are often busy with their child’s
                schedule as well as their own. Finding activities quickly and
                easily is important.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-12 flex sm:block justify-center sm:justify-start">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/quality.png'}
                className="max-w-full h-auto"
                alt="Quality"
              ></img>
            </div>
            <div className="col-span-12 sm:col-span-9 mb-6 sm:mb-12">
              <p className="text-left text-lg sm:text-2xl pl-0 sm:pl-4">
              Parents and caregivers are not always trained as teachers, but they would like to provide activities that are backed by educational resources.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-12 flex sm:block justify-center sm:justify-start">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/availabilty.png'}
                className="max-w-full"
                alt="Availability"
              ></img>
            </div>
            <div className="col-span-12 sm:col-span-9 mb-6 sm:mb-12">
              <p className="text-left text-lg sm:text-2xl pl-0 sm:pl-4">
                Parents and caregivers do not often have the materials necessary
                for an activity available at home. A link to an itemized online
                shopping list would make this more convenient.
              </p>
            </div>
          </div>
          <div className="mt-8 text-left">
            <p className="text-lg sm:text-2xl mb-8 sm:mb-14">
              Some key quotes were:
            </p>
          </div>
          <div className="flex mb-16 sm:mb-32">
            <span
              className="bg-primary rounded"
              style={{ width: '10px' }}
            ></span>
            <p className="pl-4 text-left text-lg sm:text-2xl m-0">
              <strong>
                “Time is the biggest issue. Also just not knowing what to do
                and ending up putting out crayons and paper for the millionth
                time. I don’t know how all these pinterest moms do it.”
              </strong>
            </p>
          </div>
          <div className="flex mb-16 sm:mb-32">
            <span
              className="bg-primary rounded"
              style={{ width: '10px' }}
            ></span>
            <p className="pl-4 text-left text-lg sm:text-2xl m-0">
              <strong>
                “It is hard coming up with new ideas or ideas that are as good
                as what they have already done at school, since those activities
                have more philosophy in place.”
              </strong>
            </p>
          </div>
          <div className="flex mb-16 sm:mb-32">
            <span
              className="bg-primary rounded"
              style={{ width: '10px' }}
            ></span>
            <p className="pl-4 text-left text-lg sm:text-2xl m-0">
              <strong>
                “Time spent sourcing materials takes away from the time we have
                to do activities together, We often default to ordering things
                on Amazon for efficiency. We like to be able to re-order things
                we liked.”
              </strong>
            </p>
          </div>
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/how_might_we2.png'}
              className="h-auto w-full"
              style={{ maxWidth: '630px' }}
              alt="Mobile Preview"
            ></img>
          </div>
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Define
          </h3>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
          Before coming up with a design to solve this problem, I needed to further define our target user and find out what their wants and needs would be for this product. Meet our user Megan. Megan is a work at home/stay at home mom who wants to provide enriching educational activities for her children to do at home, understand the educational reasoning behind the activities, and participate in the activities with her children. 
          </p>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl sm:text-4xl text-left font-semibold mb-6 sm:mb-10">
                Meet Megan
              </h2>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/User+Persona+V+1.pdf"
                className="max-w-full h-auto mb-6 sm:mb-12 pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/user_persona.png'}
                  className="max-w-full h-auto mb-6 sm:mb-12 pointer drop-shadow-md"
                  alt="Link to user persona figma file"
                ></img>
              </a>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Determining the Problems to Solve
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-6 sm:mb-12">
            With the needs of our user identified, it was clear that there was a
            need for an educational activity resource that{' '}
            <strong>was quick and easy to use,</strong> and that gave a{' '}
            <strong>simple solution for gathering materials</strong> for each
            activity.
          </p>
          <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            The next question was: how can these goals be achieved with
            Cleverist? Since one of the biggest pain points was time, I wanted
            to ensure that the site’s design was{' '}
            <strong>easy to understand,</strong> and organized in a way that
            made it as <strong>time efficient</strong> as possible.
          </p>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Finding the Flow
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            With the user’s problems in mind, the next steps were to determine
            our feature set, create a site map, and user flows. These tools
            helped give scaffolding to the design of the product.
          </p>
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/how_might_we3.png'}
              className="h-auto w-full "
              style={{ maxWidth: '630px' }}
              alt="Cloud"
            ></img>
          </div>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
            The <strong>feature set</strong> shown here helped me to narrow in
            on which of our desired features were must-haves for a minimum
            viable product, versus which features would be nice but could be
            added in later iterations of the product. I chose the features in P1
            and P2 based primarily on feedback from user interviews. The
            participants expressed wanting the ability to share/print/download
            the activities, as well as view and leave comments. The more basic
            features were added based on competitor analysis.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/Feature+Set.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/feature_set.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Feature Set"
                ></img>
              </a>
            </div>
          </div>
          <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
            The <strong>sitemap</strong> was built by considering the feature
            set and how it could be best applied for quick and easy navigation.
            The Log In and Search icons are separated from the navigation and on
            the same level as the logo at the top of the screen. The navigation
            consists of drop downs for Account, About, Community, and
            Activities. Each of those navigation points expands further to
            include more detailed options.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/Learn+_+Grow+Sitemap+1.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/sitemap.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Site Map"
                ></img>
              </a>
            </div>
          </div>
          <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
            These <strong>user flows</strong> helped determine exactly the
            Cleverist user would go about creating an account, and how to find
            and save an activity. Both of which were very important to the
            design of the site. I wanted to work out which steps the user would
            take to complete these tasks, and what options would be available
            along the way. For Account Creation, we start with the assumption
            that the user potentially has an account, and if not they can choose
            the option to make one. For Finding an Activity, the user can either
            use the search bar to find an activity, or choose to browse
            activities using filters. The filters within the Activities area of
            navigation were originally By Age, By Interest, and By Time. Along
            the way I received feedback from critiques and usability tests and
            the filters were changed to Age, Subject, and Duration for clarity.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/User+Flows.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/user_flows.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="User Flows"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Design */}
      <div className="grid grid-cols-12 mb-16 sm:mb-32 bg-primary drop-shadow-md">
        <div className="col-span-12 sm:col-span-10 sm:col-start-2 items-center py-8 sm:py-20 px-6 grid grid-cols-12 sm:grid-cols-10">
          <div className="col-span-12 sm:col-span-8 sm:col-start-2 flex flex-col">
            <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
              Design
            </h3>
            <p className="text-left text-lg sm:text-2xl mb-16 sm:mb-32">
              After determining my information architecture, i got to work
              creating concept sketches and worked on branding using Cleverist’s
              core values. Using the sketches and branding, I moved on to
              wireframes to develop a more complete design. I tried to focus on
              how the user interface could be most time efficient for our user,
              while still providing a{' '}
              <strong>delightful and inspiring experience.</strong>
            </p>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
              Early Sketches
            </h2>
            <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
              I began with some <strong>low fidelity</strong> concept sketches
              to get an idea of how things would look. While these were a great
              place to start, there was still a lot of UI work to do to pull it
              together. In these early sketches, the focus was seeing how the
              flows would be applied to the mobile site. I wanted to see where
              each step of the flow would take the user. Starting with the
              navigation (hamburger menu), choosing activities, then interest
              and finally art. From there I laid out how the filtered activities
              would appear to the user, and how an activity page would look once
              one activity was chosen.
            </p>
            <div className="flex justify-center items-center px-0 mb-16 sm:mb-32">
              <a
                href="https://www.figma.com/file/jqZaAtwzFzrSrt6Mb1nqRA/Cleverist-Wireframes?node-id=0%3A1&t=05AJXlKrrTlhUCzR-1"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/wireframes.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Link to figma file of early sketches"
                ></img>
              </a>
            </div>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
              Branding
            </h2>
            <div className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
              <p className="mb-10">
              With a general idea of how the site could be laid out, the next piece was deciding how I would <strong>communicate the Cleverist values</strong> using inspiration, color pallette, and logo. I chose to use colors that were a playful spin on primary colors so often seen in children’s products. The core values that I wanted to communicate with the overall branding were:
              </p>
              <ul className="list-disc ml-8 font-bold">
                <li>Inspiring</li>
                <li>Playful</li>
                <li>Creative</li>
                <li>Enriching</li>
                <li>Approachable</li>
              </ul>
            </div>
            <div className="flex justify-center items-center mb-16 sm:mb-32">
              <div>
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/mood_board.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Mood Board"
                ></img>
              </div>
            </div>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
              Mid Fidelity Wireframes
            </h2>
            <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
              Based on the sketches, I created mid fidelity,{' '}
              <strong>responsive wireframes</strong> across mobile and desktop
              so that users could access the site on different devices and have
              a consistent experience. I like to think of these as the blueprint
              stage. One main detail that was built upon was how the filters
              would be applied, at this stage in the design I chose to make the
              filters in a checklist style rather than a braod drop down
              category so that the user could choose multiple filter options.
            </p>
            <div className="flex justify-center items-center mb-16 sm:mb-32">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/Mid+Fi+Wire+Frames.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/mid_fi.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Link to figma file of mid fi wire frames"
                ></img>
              </a>
            </div>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
              High Fidelity UI
            </h2>
            <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
              This step is where the design really came together visually. I was
              able to fully design the Cleverist site while keeping our persona,
              Megan in mind. A combination of custom made icons and real imagery
              gave the site the exact feel we were going for in a way that was
              simple, clean, and time efficient.
            </p>
            <div className="flex justify-center items-center">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/Hi+Fi+Wire+frames.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-full h-auto"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/hi_fi.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Link to figma file of hi fi wire frames"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Test */}
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Test
          </h3>
          <p className="text-start text-lg sm:text-2xl mb-6 sm:mb-12">
            At the end of the visual design portion came one of the most
            important parts of the Cleverist design process - testing. I felt
            confident about my overall design but conducting usability tests
            using the Figma prototype would give clarity and inform my further
            iterations.
          </p>
          <div className='text-left mb-16 sm:mb-32'>
            <ButtonPrimary text={'view prototype'} location={'https://www.figma.com/file/Ezh6ISzgp5C1WpG1js5Myz/Cleverist-Prototypes?node-id=0%3A1&t=BzMBsCR7T6rMBXQM-1'} type={'external'} className="mt-20" />
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Usability Testing
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-6">
            I conducted usability testing sessions to test the homepage, the
            process of creating an account, and the process of finding and
            saving an activity using filters. I held usability testing sessions
            with three participants and documented all feedback.
          </p>
          <div className="text-start text-lg sm:text-2xl ">
            The usability test goals were:
            <ul className="list-disc ml-8 mb-6">
              <li>
                To evaluate wether the prototype allows users to quickly and
                effectively complete the task flows that the wireframes were
                created for.
              </li>
              <li>
                To determine if there were design issues that required
                iteration.
              </li>
            </ul>
          </div>
          <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
            The usability <strong>tests were considered successful</strong>{' '}
            because all of the users could quickly and effectively complete the
            task flows that the wireframes were created for. Some feedback was
            given for future iterations which will be applied to make the
            Cleverist site even easier and more delightful to use.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/iPhone_14.png'}
                className="max-w-full h-auto"
                alt="Cleverist iphone preview"
              ></img>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Analyzing & Prioritizing Results
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
            I took the <strong>insights</strong> from the usability testing
            sessions and organized them in a way that would show what worked,
            what could change, what questions the participants had, and their
            additional ideas. This organization helped me visualize{' '}
            <strong>design opportunities</strong> and{' '}
            <strong>potential next steps.</strong>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 sm:mb-20">
            <div className="col-span-1">
              <div className="font-semibold text-lg sm:text-2xl text-left">
                What Worked:
                <ul className="list-disc ml-8 mt-4 pr-4">
                  <li>Familiar and easy to navigate.</li>
                  <li>
                    Colors, illustrations, typeface, and other UI were clean and
                    minimal while remaining playful and interesting.
                  </li>
                  <li>Tasks were intuitive and easy to complete.</li>
                  <li>Information provided was detailed and comprehensive.</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 mt-8 sm:mt-0">
              <div className="font-semibold text-lg sm:text-2xl text-left">
                What Could Change:
                <ul className="list-disc ml-8 mt-4">
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
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/Analyzing+Results+1.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/analyzing_results.png'}
                  className="max-w-full h-auto"
                  alt="Analyzing results"
                ></img>
              </a>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Final Iterations
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-6 sm:mb-12">
            Based on the test results, I made some priority revisions throughout
            the site based on how impactful it would be and how it would fit
            into the time frame I had. Below are the main revisions that were
            made.
          </p>
          <ul className="list-disc ml-8 font-semibold text-lg sm:text-2xl text-left mb-10 sm:mb-20">
            <li className="mb-10 sm:mb-32">
              Button at the end of filter section to allow the user to apply
              filters rather than clicking “X”.
              <div className="flex justify-center items-center mt-16 sm:mt-20">
                <div>
                  <img
                    src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/iteration_1.png'}
                    className="max-w-full h-auto"
                    alt="Activity Filters"
                  ></img>
                </div>
              </div>
            </li>
            <li className="mb-10 sm:mb-32">
            Heart icon added to the upper right corner of each activity image so that the user can easily add the activity to their library.
              <div className="flex justify-center items-center mt-10 sm:mt-20">
                <div>
                  <img
                    src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/iteration_2.png'}
                    className="max-w-full h-auto"
                    alt="Color Mixing"
                  ></img>
                </div>
              </div>
            </li>
            <li className="mb-6 sm:mb-12">
              On the Activity page, “Leave a Comment” section added before the
              existing comments from other users.
              <div className="flex justify-center items-center mb-16 mt-10 sm:mt-10 sm:my-20">
                <div>
                  <img
                    src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/cleverist/iteration_3.png'}
                    className="max-w-full h-auto"
                    alt="Comments"
                  ></img>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Next Steps */}
      <div className="grid grid-cols-12 py-20 bg-primary mb-16 sm:mb-32 drop-shadow-md">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Next Steps
          </h3>
          <div className="mt-4 text-start text-lg sm:text-2xl mb-10">
            With more time, the next steps I would take on this design project
            would be:
            <ul className="list-disc ml-8 font-semibold mt-10">
              <li>Creating an “add your own activity” feature.</li>
              <li>Design features for the Community section.</li>
              <li>Add a FAQ section.</li>
              <li>Continue to test and iterate.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Final Thoughts */}
      <div className="grid grid-cols-12 mb-16 sm:mb-32 p-10 sm:py-32 bg-secondary drop-shadow-md">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Learnings & Final Thoughts
          </h3>
          <p className="mb-10 text-left text-lg sm:text-2xl">
            This was my first real UI/UX design project that I have worked on
            and I learned so much from it.My main growth came in the areas of
            tool sets (primarily Figma), and seeing a project from start to
            finish.
            <br />
            <br />I also learned how I would like to continue to improve as a
            designer. After experiencing the entire design thinking process, I
            have a much better idea how to organize projects and at which stages
            to seek critique and feedback.
            <br />
            <br />
            This was certainly an accelerated version of the Ui/UX design
            process, and there are some things I would have pursued further if
            given more time. I would have liked to see how the further
            iterations of my design took shape, and how they would evolve
            through prototyping and testing.
            <br />
            <br />
            Although this project was new and sometimes challenging, I truly
            enjoyed the challenge and feel that I will continue to stay curious
            about the process and grow as a designer.
          </p>
        </div>
      </div>
    </div>
  );
}

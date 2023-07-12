import React from 'react';
import ButtonPrimary from '../ButtonPrimary';

export default function Guilder() {
  return (
    <div className="bg-offWhite mt-16 sm:mt-32">
      {/* Intro */}
      <div className="grid grid-cols-12 mb-10 sm:mb-20">
        <div className="flex flex-col  justify-center mb-6 sm:mb-12 sm:mb-0 col-span-12 sm:col-start-2 sm:col-end-7">
          <h1 className="font-bold text-3xl sm:text-6xl text-offBlack mb-10">
            Guilder
          </h1>
          <p className="text-lg sm:text-2xl text-center">
            A Princess Bride themed{' '}
            <span className="text-secondary">coffee shop</span>
            <br /> in Portland, Oregon in need of a{' '}
            <span className="text-secondary">
              new
              <br /> design
            </span>{' '}
            including an <span className="text-secondary">online ordering</span>
            <br /> system.
          </p>
          <div className='mt-10'>
            <ButtonPrimary text={'view prototype'} location={'https://www.figma.com/file/LJDJiO6rWKRLxyFQeKx21b/Guilder-Wireframes?type=design&node-id=26%3A11944&t=JQnchFyV1qHpQvbJ-1'} type={'external'} className="mt-20" />
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
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/mobile_preview.png'}
                className="max-w-full h-auto wireframe"
                alt="Preview of final design"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* Role Details */}
      <div className="bg-secondary py-10 grid grid-cols-12  mb-16 sm:mb-16 sm:mb-32 drop-shadow-md">
        <div className='flex justify-between flex-col sm:flex-row col-start-3 col-end-11'>
          <div className="">
            <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Role</h4>
            <p className="text-lg sm:text-2xl mb-8 sm:mb-0">
              UX/UI Designer
            </p>
          </div>
          <div className="">
            <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Product</h4>
            <p className="text-lg sm:text-2xl mb-8 sm:mb-0">Mobile Website</p>
          </div>
          <div className="">
            <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Duration</h4>
            <p className="text-lg sm:text-2xl mb-8 sm:mb-0">
              Dec 2022 to Jan 2023
            </p>
          </div>
          <div className="">
            <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Tools</h4>
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
            Guilder is a{' '}
            <strong>Princess Bride themed coffee shop and restaurant</strong> in
            Portland, Oregon. Guilder has two locations, one in Northeast
            Portland, and one inside of the famous Powell’s City of Books, and
            offers in person as well as online ordering.
          </p>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            The Problem
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            Presently and especially since the pandemic, online ordering coffee
            and food is incredibly common. Guilder has offered online ordering,
            however the <strong>original ordering system was confusing</strong>{' '}
            and routed to a little known third party ordering site, did not
            include images of menu items or customization, and wasn’t up to
            competitor standards. This{' '}
            <strong>
              ordering system could be redesigned to better user experience and
              create more sales for the coffee shop.
            </strong>{' '}
            The theme of the coffee shop is sometimes hard to understand, and
            could be woven into the experience more clearly.
          </p>
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/how_might_we1.png'}
              className="h-auto w-full"
              style={{ maxWidth: '630px' }}
              alt="How might we provide quality educational activities for parents and caregivers to do with their children at home?"
            ></img>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            The Solution
          </h2>
          <div className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            <p>A convenient mobile app where users can:</p>
            <p>A responsive mobile site where users can:</p>
            <ul className="list-disc ml-8">
              <li>Place an online order from Guilder for pickup.</li>
              <li>Explore both locations and their offerings.</li>
              <li>Understand the story and inspiration behind the company.</li>
            </ul>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-10 sm:mb-20">
            Design Thinking Process
          </h2>
          <img
            src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/design_thinking.png'}
            className="max-w-full h-auto mb-16 sm:mb-32"
            alt="Research, define, design, test"
          ></img>
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Research
          </h3>
          <p className="mb-16 sm:mb-32 text-start text-lg sm:text-2xl">
          My goal was to understand the experience that users have when ordering coffee and food from Guilder. I made a research plan to find out what offerings and information users were interested in seeing in a local coffee shop’s site. I looked at the current competition to see what they offered, and kept that in mind during user interviews.
          </p>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Looking at the competition
          </h2>
          <p className=" text-start text-lg sm:text-2xl mb-10 sm:mb-20">
          All of the competitor services offered coffee and food at locations in the Portland area, but varied in their online ordering services. The larger companies had apps or established online ordering systems with little branding/story, while the smaller companies had an inspiring aesthetic with inadequate online ordering systems.
          </p>
        </div>
      </div>
      {/* Competition Card */}
      <div className="bg-primary grid grid-cols-12 py-10 px-6 sm:px-0 sm:py-20 mb-16 sm:mb-32 drop-shadow-md">
        <div className="col-span-12 sm:col-start-3 sm:col-end-7 flex flex-col items-center">
          <div className="flex items-center">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/good.png'}
              className="max-w-full"
              alt="Good company logo"
              style={{ height: '93px' }}
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Portland coffee shop serving and roasting coffee. Emphasis on
            community involvement.
          </p>
        </div>
        <div className="col-span-12 sm:col-start-7 sm:col-end-11 flex flex-col items-center mt-8 sm:mt-0">
          <div className="flex items-center">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/cafe_olli.png'}
              className="max-w-full rounded-sm"
              style={{ height: '93px' }}
              alt="Cafe Olli logo"
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Portland coffee shop/restaurant that is seasonally focused, locally
            sourced, sustainable, and employee owned.
          </p>
        </div>
        <div className="col-span-12 sm:col-start-3 sm:col-end-7 flex flex-col items-center mt-8 sm:mt-16">
          <div className="flex items-center">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/starbucks.png'}
              className="max-w-full "
              style={{ height: '93px' }}
              alt="Starbucks Logo"
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            An international coffee company founded in the Pacific Northwest
            with wide variety of drink and food options.
          </p>
        </div>
        <div className="col-span-12 sm:col-start-7 sm:col-end-11 flex flex-col items-center mt-8 sm:mt-16">
          <div className="flex items-center">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/stumptown.png'}
              className="max-w-full "
              style={{ height: '93px' }}
              alt="Stumptown Logo"
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Portland coffee shop serving high quality ethically sourced coffee.
            Emphasis on highlighting particular varieties of coffee.
          </p>
        </div>
      </div>
      {/* Hearing People */}
      <div className="grid grid-cols-12 mt-8 sm:mt-16">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Hearing People's Stories
          </h2>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
            I held 1:1 user interviews with three research participants to learn
            about their needs and pain points when visiting and ordering from
            local coffee shops. I learned that{' '}
            <strong>
              the main concerns were convenience, ambience, and offerings.
            </strong>
          </p>
          <div className="grid grid-cols-12 mb-10 sm:mb-20">
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-12 flex sm:block justify-center sm:justify-start">
              <img src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/convenience.png'} className="max-w-full" alt="time"></img>
            </div>
            <div className="col-span-12 sm:col-span-9 mb-6 sm:mb-12">
              <p className="text-left text-lg sm:text-2xl pl-0 sm:pl-4">
                Users expressed that the convenience of placing and picking up
                orders is important in their decision making, particularly when
                it comes to wait time.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-12 flex sm:block justify-center sm:justify-start">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/ambiance.png'}
                className="max-w-full h-auto"
                alt="Quality"
              ></img>
            </div>
            <div className="col-span-12 sm:col-span-9 mb-6 sm:mb-12">
              <p className="text-left text-lg sm:text-2xl pl-0 sm:pl-4">
                Users wanted to have an idea of what the coffee shop/restaurant
                would be like when they arrived so they could plan their trip
                easier around their needs (work, pets, children, etc.).
              </p>
            </div>
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-12 flex sm:block justify-center sm:justify-start">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/offerings.png'}
                className="max-w-full"
                alt="Availability"
              ></img>
            </div>
            <div className="col-span-12 sm:col-span-9 mb-6 sm:mb-12">
              <p className="text-left text-lg sm:text-2xl pl-0 sm:pl-4">
                Users expressed that they prefer to order from local coffee
                shops that have a food menu in addition to their drink menu.
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
                “I prefer to order off apps or square if a coffee shop has that
                option, it is such a time saver and easy to modify my drink.”
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
              “I think it all really ties together... The name, decor, logo,
                ambiance, menu offerings. I like to see it all make sense as a
                story.”
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
                “If I can’t walk to the coffee shop, it has to be on my way to
                work for me to visit. This is especially true because of the
                time I account for with wait time.”
              </strong>
            </p>
          </div>
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/how_might_we2.png'}
              className="h-auto w-full"
              style={{ maxWidth: '630px' }}
              alt="Mobile Preview"
            ></img>
          </div>
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Define
          </h3>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
          Before coming up with a design to solve this problem, I needed to further define our target user and find out what their wants and needs would be for this product. Meet our users Allie and Tyler. Allie is a stay at home mom that enjoys walking to coffee shops in her neighborhood where her family, friends, and dog are welcome. Tyler is a sous chef who likes to pick up his coffee from local shops that make it easy to order on his way to work.
          </p>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl sm:text-4xl text-left font-semibold mb-6 sm:mb-10">
                Meet Allie and Tyler
              </h2>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/guilder/persona1.pdf"
                className="max-w-full h-auto mb-6 sm:mb-10 pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/persona1.png'}
                  className="max-w-full h-auto pointer drop-shadow-md"
                  alt="Link to user persona figma file"
                ></img>
              </a>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/guilder/persona2.pdf"
                className="max-w-full h-auto mb-6 sm:mb-32 pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/persona2.png'}
                  className="max-w-full h-auto pointer drop-shadow-md"
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
            need for a better online ordering system that{' '}
            <strong>was quick and easy to use,</strong> and that gave the user
            <strong>an idea of what to expect</strong> so that they could better
            plan their trip.
            <br />
            <br /> The next question was: how can these goals be achieved with
            Guilder? Since one of the biggest pain points was convenience, I
            wanted to ensure that the site’s design was{' '}
            <strong>informative,</strong> and <strong>organized</strong> in a
            way that made it as <strong>convenient</strong> as possible.
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
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/how_might_we3.png'}
              className="h-auto w-full"
              style={{ maxWidth: '630px' }}
              alt="Cloud"
            ></img>
          </div>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
            The <strong>feature set</strong> shown here helped me to narrow in
            on which of our desired features were must-haves for a minimum
            viable product, versus which features would be nice but could be
            added in later iterations of the product. I chose the features in P1
            and P2 based primarily on feedback from competitor analysis. Looking
            at what makes the competitor’s ordering systems successful was
            helpful in prioritizing features of the ordering system for Guilder.
            To optimize Guilder’s design for their target users, I looked to
            user interviews for customization ideas.
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
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/feature_set.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Feature Set"
                ></img>
              </a>
            </div>
          </div>
          <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
            The <strong>sitemap</strong> was built by considering the feature
            set and how it could be best applied for quick and easy navigation.
            The Log In and Order icons area separated from the navigation and on
            the same level as the logo at the top of the screen. The navigation
            consists of drop downs for Menus, Order, and About Us. Keeping the
            navigation simple was important to the design because it keeps the
            focus on ordering. Each of those navigation points expands further
            to include more detailed options.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/guilder/sitemap.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/sitemap.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Site Map"
                ></img>
              </a>
            </div>
          </div>
          <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
            These <strong>user flows</strong> helped determine exactly the how
            the user would go about creating an account, and how to place an
            order online for pickup. Both of which were very important to the
            design of the site. I wanted to work out which steps the user would
            take to complete these tasks, and what options would be available
            along the way. For Account Creation, we start with the assumption
            that the user potentially has an account, and if not they can choose
            the option to make one. For ordering, the user can either log in or
            head directly to the order page via navigation or CTA. From there,
            the user has the option to order from an account or as a guest. The
            order as a guest option is helpful as it invites more orders from
            users who may not be regulars to the service yet.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/guilder/user_flow.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/user_flow.png'}
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
              creating concept sketches and worked on branding using Guilder’s
              theme as the focus. Using the sketches and branding, I moved on to
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
              each step of the flow would take the user. Here we see what would
              happen if the user wanted to create an account, or as the user
              selects the CTA and places an order.
            </p>
            <div className="flex justify-center items-center px-0 mb-16 sm:mb-32">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/guilder/sketches.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/sketches.png'}
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
                With a general idea of how the site could be laid out, the next
                piece was deciding how I would{' '}
                <strong>communicate the Guilder branding and story.</strong> I
                chose to use colors that were similar to those used on their
                label for Juniors Coffee (their in house coffee roaster) which
                also happens to be the color scheme of their coffee cups. Theme
                was huge for this project because the business wants the
                Princess Bride story woven throughout. The values that I wanted
                to communicate with the overall branding were:
              </p>
              <ul className="list-disc ml-8 font-bold">
                <li>Whimsical</li>
                <li>Inspired</li>
                <li>Vintage</li>
                <li>Soft</li>
                <li>Balanced</li>
              </ul>
            </div>
            <div className="flex justify-center items-center mb-16 sm:mb-32">
              <div>
                  <img
                    src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/Mood+Board+1.png'}
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
              <strong>responsive wireframes</strong> so that users could access
              the site on different devices and have a consistent experience. I
              like to think of these as the blueprint stage. The mid fidelity
              wireframes maintained the rough sketch design themes but more
              polished, and adding some small UI ideas.
            </p>
            <div className="flex justify-center items-center mb-16 sm:mb-32">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/guilder/mid_fi_wireframes.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/Mid+Fidelity.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Mid fi wire frames"
                ></img>
              </a>
            </div>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
              High Fidelity UI
            </h2>
            <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
              This step is where the design really came together visually. I was
              able to fully design the Guilder site while keeping our persona
              users Allie and Tyler . I focused on simplifying the navigation,
              adding more customization options, adding a time tracker, and
              creating a more cohesive branding and story for the site. I
              started by redesigning the homepage to prominently feature the
              online ordering system and make it easy to find. I also added a
              "Customize Your Order" section, allowing users to select their
              drink options and add notes for customization. A time tracker was
              also made visible on the main page so that the user would know how
              busy it was before placing an order and picking up.
            </p>
            <div className="flex justify-center items-center">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/guilder/hi_fi_wireframes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-full h-auto"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/hi_fi.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Link to figma file of hi fi wire frames"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  Test */}
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Test
          </h3>
          <p className="text-start text-lg sm:text-2xl mb-6 sm:mb-12">
            At the end of the visual design portion came one of the most
            important parts of the Guilder design process - testing. I felt
            confident about my overall design but conducting usability tests
            using the Figma prototype would give clarity and inform my further
            iterations.
          </p>
          <div className='text-left mb-16 sm:mb-32'>
            <ButtonPrimary text={'view prototype'} location={'https://www.figma.com/file/LJDJiO6rWKRLxyFQeKx21b/Guilder-Wireframes?type=design&node-id=26%3A11944&t=JQnchFyV1qHpQvbJ-1'} type={'external'} className="mt-20" />
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Usability Testing
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-6">
            I conducted usability testing sessions to test the process of
            placing an online order for pickup. I held usability testing
            sessions with five participants and documented all feedback.
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
            Guilder Mobile Site even easier and more delightful to use.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/iphone_14.png'}
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
                    minimal while remaining on theme.
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
                <li>Users felt there should be the option to add a tip.</li>
                  <li>
                    Users wanted a form field for notes on the order items.
                  </li>
                  <li>
                    Users were interested in seeing ingredient information for
                    menu items.
                  </li>
                </ul>
              </div>
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
            Nutritional information linked under the item description as well as a drop down option for adding a tip percentage to the order and an area to add additional notes.  
              <div className="flex justify-center items-center mt-16 sm:mt-20">
                <div>
                  <img
                    src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/iteration1.png'}
                    className="max-w-full h-auto"
                    alt="Iteration 1"
                  ></img>
                </div>
              </div>
            </li>
            <li className="mb-10 sm:mb-32">
            On the order total page, tip amount is added accordingly.
              <div className="flex justify-center items-center mt-10 sm:mt-20">
                <div>
                  <img
                    src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/guilder/iteration2.png'}
                    className="max-w-full h-auto"
                    alt="Iteration 2"
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
            <li>Adding the ability to like and rate menu items.</li>
              <li>Include the option to repeat a previous order.</li>
              <li>
                Feature an information section for each location (ambiance,
                amenities, etc)
              </li>
              <li>Add a section for staff favorite menu items and books.</li>
              <li>Continue to test and iterate</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mb-16 sm:mb-32 p-10 sm:py-32 bg-secondary drop-shadow-md">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Learnings & Final Thoughts
          </h3>
          <p className="mb-10 text-left text-lg sm:text-2xl">
          I enjoyed being able to work on a site for a real local business
            that I was familiar with. Knowing a bit about who they are and what
            they were lacking was really helpful to the design process. The
            experience of contacting the company and presenting my design is
            something I know I will benefit from in the future.
            <br />
            <br />I also learned that I would love more opportunities to
            re-imagine logos and create illustrations to support site design.
            Coming up with ways to tell a brand’s story through unique design
            elements and images feels like one of my strengths as a designer.
            <br />
            <br />
            This was certainly an accelerated version of the UI/UX design
            process, and there are some things I would have pursued further if
            given more time. I would have liked to see how the further
            iterations of my design took shape, and how they would evolve as the
            needs of the business changed.
          </p>
        </div>
      </div>
    </div>
  );
}

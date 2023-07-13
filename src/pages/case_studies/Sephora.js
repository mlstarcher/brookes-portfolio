import React from 'react';
import ButtonPrimary from '../ButtonPrimary.js';
import Slideshow from '../Slideshow.js';

export default function Sephora() {
  return (
    <div className="bg-offWhite mt-8 sm:mt-32">
      {/* Intro */}
      <div className="grid grid-cols-12 mb-10 sm:mb-20">
        <div className="flex flex-col justify-center mb-6 sm:mb-12 sm:mb-0 col-span-12 sm:col-start-2 sm:col-end-7 order-2 sm:order-1">
          <h1 className="font-bold text-3xl sm:text-6xl text-offBlack mb-10">
            Sephora Recycle Feature
          </h1>
          <p className="text-lg sm:text-2xl text-center">
            A <span className="text-accent">website feature</span> that allows
            users to
            <br /> mail their old or unwanted cosmetics
            <br /> and packaging to Sephora for
            <br />
            <span className="text-accent">recycling.</span>
          </p>
          <div className='mt-10'>
            <ButtonPrimary text={'view prototype'} location={'https://www.figma.com/file/kV1FCexT4imVIc2BapHTpB/Sephora-Recycle-Feature-Wireframes?type=design&node-id=47%3A2&t=XeB5o0Zi9PKohavh-1'} type={'external'} className="mt-20" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center col-span-12 sm:col-start-7 sm:col-end-12 order-1 sm:order-2">
          <Slideshow />
        </div>
      </div>
      {/* Role details */}
      <div className="bg-secondary py-10 sm:py-20 grid grid-cols-12  mb-16 sm:mb-16 sm:mb-32 drop-shadow-md">
        <div className='flex justify-between flex-col sm:flex-row col-start-3 col-end-11'>
          <div>
            <p className="mb-2 font-semibold text-2xl sm:text-3xl">Role</p>
            <p className="text-lg sm:text-2xl mb-8 sm:mb-0">
              UX/UI Designer
            </p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-2xl sm:text-3xl">Product</p>
            <p className="text-lg sm:text-2xl mb-8 sm:mb-0">Website Feature</p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-2xl sm:text-3xl">Duration</p>
            <p className="text-lg sm:text-2xl mb-8 sm:mb-0">
              April to May 2023
            </p>
          </div>
          <div>
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
            The goal of this project was to create a{' '}
            <strong>convenient and accessible feature</strong> that would allow
            customers to <strong>recycle their old cosmetics</strong>
            and packaging as well as{' '}
            <strong>
              promote environmental sustainability and responsible business
              practices
            </strong>{' '}
            among Sephora customers
          </p>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            The Problem
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            Sephora is a leading beauty retailer that offers a wide range of
            cosmetics, skincare, haircare, and fragrance products. Sephora has
            2600 stores in 34 countries as well as a website and mobile app.
            After learning that the beauty and wellness industries generate over
            120 billion packages every year,{' '}
            <strong>
              Sephora is looking to improve their environmental footprint.
            </strong>{' '}
            Sephora recently partnered with a nonprofit called Pact that helps
            recycle empty cosmetics containers to be mechanically recycled into
            another product (e.g., packaging, carpet, pallets), down-cycled
            (e.g. into asphalt), molecularly recycled (can then be used to build
            something else), or converted into energy. Currently Pact has bins
            in select stores for recycling, but unfortunately that option
            doesn't reach as many users as Sephora would like.
          </p>
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/how_might_we1.png'}
              className="h-auto w-full"
              style={{ maxWidth: '630px' }}
              alt="How might we"
            ></img>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            The Solution
          </h2>
          <div className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            <p>A site feature where users can:</p>
            <ul className="list-disc ml-8">
              <li>
                Generate a return label, and send their empty containers back to
                Sephora's recycling program in the mailer package they received.
              </li>
              <li>
                Earn Beauty Insider points to use for perks and purchases as
                incentive for recycling their cosmetics
              </li>
            </ul>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-10 sm:mb-20">
            Design Thinking Process
          </h2>
          <img
            src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/design_thinking.png'}
            className="max-w-full h-auto mb-16 sm:mb-32"
            alt="Research, define, design, test"
          ></img>
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Research
          </h3>
          <p className="mb-16 sm:mb-32 text-start text-lg sm:text-2xl">
            My goal was to understand the experience that users have when
            finding a solution for their old or unwanted cosmetics products and
            packaging. I made a research plan to find out what qualities and
            characteristics users were interested in seeing in an online
            cosmetics recycling feature. I looked at the current competition to
            see what they offered, and kept that in mind during user interviews.
          </p>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Looking at the competition
          </h2>
          <p className=" text-start text-lg sm:text-2xl mb-10 sm:mb-20">
            All of the competitor services sell cosmetics products from their
            sites as well as in store, but only one of the competitors (Credo)
            offers recycling. Credo also partnered with Pact and has in store
            drop off, but no online option at this time.
          </p>
        </div>
      </div>
      {/* Competition Card */}
      <div className="bg-primary p-20 grid grid-cols-12  mb-16 sm:mb-32 drop-shadow-md">
        <div className="col-span-12 sm:col-start-2 sm:col-end-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/credo.png'}
                className="object-cover w-full"
                style={{ height: '94px' }}
                alt="Credo logo"
              ></img>
            </div>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Website and store that carries only “clean beauty” products with
            focus on safety, sustainability, sourcing, ethics, and transparancy.
          </p>
        </div>
        <div className="col-span-12 sm:col-start-8 sm:col-end-12">
          <div className="flex flex-col items-center mt-10 sm:mt-0">
            <div className="flex items-center">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/ulta.png'}
                className="object-cover w-full"
                style={{ height: '94px' }}
                alt="Ulta Logo"
              ></img>
            </div>
            <p className="text-lg sm:text-2xl mt-4">
              Storefront, website, and app that sells cosmetics as well as various
              beauty services. Ulta is very similar to Sephora.
            </p>
          </div>
        </div>
        <div className="col-span-12 sm:col-start-5 sm:col-end-9">
          <div className="flex flex-col items-center mt-10 sm:mt-16">
            <div className="flex items-center">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/amazon.png'}
                className="object-cover w-full"
                alt="Amazon logo"
                style={{ height: '94px' }}
              ></img>
            </div>
            <p className="text-lg sm:text-2xl mt-4">
              Amazon Premium Beauty is the luxury cosmetics section of the biggest
              online retailers. They carry products that can also be found in
              Sephora, ulta, and department stores.
            </p>
          </div>
        </div>
      </div>
      {/* Peoples Stories */}
      <div className="grid grid-cols-12 mt-8 sm:mt-16">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Hearing People's Stories
          </h2>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
            I held 1:1 user interviews with three research participants to learn
            about their needs and pain points when looking for a recycling
            solution for their cosmetics. I learned that{' '}
            <strong>
              the main concerns were eco-friendliness, efficiency, and clarity.
            </strong>
          </p>
          <div className="grid grid-cols-12 mb-10 sm:mb-20">
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-12 flex sm:block justify-center sm:justify-start">
              <img src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/time.png'} className="max-w-full" alt="Eco Friendliness"></img>
            </div>
            <div className="col-span-12 sm:col-span-9 mb-6 sm:mb-12">
              <p className="text-left text-lg sm:text-2xl pl-0 sm:pl-4">
                While users wanted to participate in a recycling program in
                theory, they weren’t sure they would get around to it unless it
                was a simple and convenient process.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-12 flex sm:block justify-center sm:justify-start">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/quality.png'}
                className="max-w-full h-auto"
                alt="Efficiency"
              ></img>
            </div>
            <div className="col-span-12 sm:col-span-9 mb-6 sm:mb-12">
              <p className="text-left text-lg sm:text-2xl pl-0 sm:pl-4">
                Users weren't sure which types of cosmetics containers and
                packaging could in fact be recycled. Additionally, they wanted
                more information on how to prepare items for recycling.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-3 mb-6 sm:mb-12 flex sm:block justify-center sm:justify-start">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/availabilty.png'}
                className="max-w-full"
                alt="Clarity"
              ></img>
            </div>
            <div className="col-span-12 sm:col-span-9 mb-6 sm:mb-12">
              <p className="text-left text-lg sm:text-2xl pl-0 sm:pl-4">
                Users were interested in shopping for in-season produce but
                doing so impacted their ability to plan their groceries and shop
                at the farmers market. Knowing what is available and in season
                each week would be helpful.
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
                “I love an in-store moment but realistically I mostly shop
                online for convenience unless it is something I need
                like...today.”
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
                “I am really doing my best to shift to supporting companies that
                are open about their sourcing and business practices, but
                especially about their commitment to being eco-friendly.”
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
                “I always try to recycle exterior packaging like boxes but I
                never know what to do with the makeup that I don’t use, so it
                just ends up sitting in my cabinet.”
              </strong>
            </p>
          </div>
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/how_might_we2.png'}
              className="h-auto w-full"
              style={{ maxWidth: '630px' }}
              alt="How might we"
            ></img>
          </div>
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-10">
            Define
          </h3>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
            Before coming up with a design to solve this problem, I needed to
            further define our target user and find out what their wants and
            needs would be for this product. Meet our user Wren. Wren is a
            college student living in Los Angeles who wants to be an
            eco-conscious cosmetics consumer. Wren frequently shops with Sephora
            and wishes their recycling program was more accessible and easier to
            participate in.
          </p>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl sm:text-4xl text-left font-semibold mb-6 sm:mb-10">
                Meet Wren
              </h2>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/persona.pdf"
                className="max-w-full h-auto mb-6 sm:mb-12 pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/persona.png'}
                  className="max-w-full h-auto mb-6 sm:mb-12 pointer drop-shadow-md"
                  alt="Link to user persona figma file"
                ></img>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
                Wren's Journey
              </h2>
              <p className="text-start text-lg sm:text-2xl mb-6 sm:mb-20">
                After getting to know our user Wren, I made a journey map as a
                visual representation of her journey to recycle cosmetics. This
                helped me understand what her actions, thoughts, behaviors, and
                emotions would be and therefore what her pain points might be so
                that I could better address them.
              </p>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/journey_map.pdf"
                className="max-w-full h-auto mb-16 sm:mb-32 pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/journey_map.png'}
                  className="max-w-full h-auto pointer drop-shadow-md"
                  alt="Link to user persona figma file"
                ></img>
              </a>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Determining the Problems to Solve
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            With the needs of our user identified, it was clear that there was a
            need for a website feature that <strong>was informative</strong>,
            and that provided an <strong>efficient</strong> way to recycle
            cosmetics.
            <br />
            <br />
            The next question was: how can these goals be achieved with Sephora?
            Since one of the biggest pain points was efficiency, I wanted to
            ensure that the feature was{' '}
            <strong>quick and simple to use, easy to understand,</strong> and
            <strong>organized</strong> in a way that provided information about
            the company’s eco friendly practices.
          </p>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Finding the Flow
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            With the user’s problems in mind, the next steps were to determine
            our feature elements using a value matrix, and task flow. These
            tools helped give scaffolding to the design of the product.
          </p>
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/how_might_we3.png'}
              className="h-auto w-full"
              style={{ maxWidth: '630px' }}
              alt="How might we"
            ></img>
          </div>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
            This <strong>value matrix</strong> helped me analyze and prioritize different values and factors that were important for the recycling feature. High impact items were prioritized, and specifically the high impact items that were also low effort as to save time getting an MVP designed. These included information on recycling cosmetics, tips for cleaning and preparing cosmetics for recycle, the option to add “recycle” to your basket while shopping, and earning beauty insider points for using the feature.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/value_matrix.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/value_matrix.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Value Matrix"
                ></img>
              </a>
            </div>
          </div>
          <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
            These <strong>task flows</strong> helped determine exactly how the Sephora user would go about using the recycling feature. It was important to explore multiple task flows, since there would be multiple ways to access the feature. A user going to the site with the intention of recycling might choose the CTA, while other shoppers might
            discover the feature during checkout and add it to their basket then.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/task_flow.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/task_flows.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Task flow"
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
              After determining my information architecture, I got to work
              creating concept sketches and worked on branding using Sephora and
              Pact’s existing design patterns and branding. Using the sketches
              and branding, I moved on to wireframes to develop a more complete
              design. I tried to focus on how the user interface could be most
              time efficient for our user, while still providing a{' '}
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
              flow would be applied to the site. I wanted to see where each step
              of the flow would take the user. Starting with choosing the
              recycling CTA, landing on the Sephora x Pact page with the option
              for getting more info or starting the multi part form, and finally
              adding to basket and checking out. During the process, I realized
              there should be screens to show how the user would track the
              progress of their recycling mailer as well.
            </p>
            <div className="flex justify-center items-center px-0 mb-16 sm:mb-32">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/sketches.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/recycle_feature.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="Link to figma file of early sketches"
                ></img>
              </a>
            </div>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
              UI Elements
            </h2>
            <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
              With a general idea of how the site could be laid out, the next
              piece was deciding how I would create UI elements that would fit
              in seamlessly with Sephora’s existing design. Another piece to
              consider was using cards and illustrations similar to the ones
              Pact uses on their site, but through the Sephora lense. For
              colors, I used Sephora’s classic color palette of black and
              white with pops of red.
            </p>
            <div className="flex justify-center items-center mb-16 sm:mb-32">
              <img
                src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/illustrations.png'}
                className="max-w-full h-auto drop-shadow-md"
                alt="Link to figma file of mid fi wire frames"
              ></img>
            </div>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
              Mid Fidelity Wireframes
            </h2>
            <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
              Based on the sketches, I created mid fidelity wireframes. I like
              to think of these as the blueprint stage. One main detail that was
              built upon was how the multi page form would look. It needed to be
              consistent with Pact’s process, but still fit in with the Sephora
              site.
            </p>
            <div className="flex justify-center items-center mb-16 sm:mb-32">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/mid_fi_wireframes.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/mid_fi.png'}
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
              able to fully design the Sephora recycling feature while keeping
              our persona, Wren in mind. A combination of custom made
              illustrations and real imagery gave the site the exact feel we
              were going for in a way that was simple, clean, and time
              efficient.
            </p>
            <div className="flex justify-center items-center">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/hi_fi_wireframes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-full h-auto"
              >
                <img
                  src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/hi_fi.png'}
                  className="max-w-full h-auto drop-shadow-md"
                  alt="High fi wire frames"
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
            important parts of the Sephora Recycle Feature design process -
            testing. I felt confident about my overall design but conducting
            usability tests using the Figma prototype would give clarity and
            inform my further iterations.
          </p>
          <div className='text-left mb-16 sm:mb-32'>
            <ButtonPrimary text={'view prototype'} location={'https://www.figma.com/file/kV1FCexT4imVIc2BapHTpB/Sephora-Recycle-Feature-Wireframes?type=design&node-id=47%3A2&t=XeB5o0Zi9PKohavh-1'} type={'external'} className="mt-20" />
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-10">
            Usability Testing
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-6">
            I conducted usability testing sessions to test the process of
            choosing the recycle feature from the homepage CTA, following the
            multi page form, and adding to basket/checking out. I also included
            the flows for tracking the progress of the recycle mailer. I held
            usability testing sessions with three participants and documented
            all feedback.
          </p>
          <div className="text-start text-lg sm:text-2xl ">
            The usability test goals were:
            <ul className="list-disc ml-8 mb-6">
              <li>
                To evaluate wether the prototype allows users to quickly and
                effectively complete the task flow that the wireframes were
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
            task flow that the wireframes were created for. Some feedback was
            given for future iterations which will be applied to make the
            Sephora recycle feature even easier and more delightful to use.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <img
                src={'	https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/sephora_homepage_preview.png'}
                className="max-w-full h-auto"
                style={{ maxHeight: "452px"}}
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
            <strong>potential next steps</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 sm:mb-20">
            <div className="col-span-1">
              <div className="font-semibold text-lg sm:text-2xl text-left">
                What Worked:
                <ul className="list-disc ml-8 mt-4 pr-4">
                  <li>Familiar and easy to navigate.</li>
                  <li>
                    Colors, illustrations, typeface, and other UI elements were
                    clean and minimal while staying on brand with Sephora.
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
                  <li>
                    Users wanted to see the option to learn more information
                    about the recycle program.
                  </li>
                  <li>
                    Users wanted to know what would happen if they selected that
                    the item were not clean.
                  </li>
                  <li>
                    Users felt unclear about needing to add the quantity of each
                    item.
                  </li>
                  <li>
                    Users were confused on what the red in the illustrations
                    indicated.
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
            into the timeframe I had. Below are the main revisions that were
            made.
          </p>
          <ul className="list-disc ml-8 font-semibold text-lg sm:text-2xl text-left mb-10 sm:mb-20">
            <li className="mb-10 sm:mb-32">
              Clickable link to “learn more” about the Sephora x Pact recycle
              program.
              <div className="flex justify-center items-center mt-10 sm:mt-20">
                <div>
                  <img
                    src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/iteration1.png'}
                    className="max-w-full h-auto"
                    style={{ maxHeight: "717px"}}
                    alt="Iteration 1"
                  ></img>
                </div>
              </div>
            </li>
            <li className="mb-10 sm:mb-32">
              Clarity was added in step 1, so that the user knows that if they
              choose “no” they will be directed to information about how and why
              to clean their cosmetics packaging.
              <div className="flex justify-center items-center mt-10 sm:mt-20">
                <div>
                  <img
                    src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/iteration2.png'}
                    className="max-w-full h-auto"
                    style={{ maxHeight: "717px"}}
                    alt="Iteration 2"
                  ></img>
                </div>
              </div>
            </li>
            <li className="mb-6 sm:mb-12">
              Pop of “Sephora red” color was only added to item illustrations
              once chosen, as another indication that they were selected.
              Additionally, information was added for clarity on the quality
              that could be sent.
              <div className="flex justify-center items-center mb-16 sm:mb-32 mt-10 sm:mt-10 sm:mt-20">
                <div>
                  <img
                    src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/sephora/iteration3.png'}
                    className="max-w-full h-auto"
                    style={{ maxHeight: "717px"}}
                    alt="Iteration 3"
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
              <li>
                Adding the ability to earn extra points for Beauty Insider
                towards clean beauty brands carried at Sephora.
              </li>
              <li>
                Fully designing the pages that would include information about
                the Sephora x Pact recycling program.
              </li>
              <li>
                Create the ability to have a QR code generated to be used for in
                person recycling drop off.
              </li>
              <li>Add social media links.</li>
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
            This design experience was unique to my other design projects in
            that I had to work with a pre existing design. Creating designs
            based on something that already existed had its pros and cons. I
            liked having a frame of reference to use for consistency, but it did
            limit what could be done creatively in some ways.
            <br />
            <br />
            The use of the journey map helped me a lot when figuring out what
            the full experience would look like for the user. In this case, it
            meant that the task wasn't completed when the user checked out, but
            rather when the user logged back in to check the status of their
            mailer.
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

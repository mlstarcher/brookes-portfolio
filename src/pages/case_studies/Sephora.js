import React from 'react';

//Images and icons
import { FaArrowRight } from 'react-icons/fa';

import iphone_14 from '../../assets/iphone_14_transparent.png';
import design_thinking_image from '../../assets/design_thinking_image.png';
import how_might_we1 from '../../assets/sephora/how_might_we1.png';
import how_might_we2 from '../../assets/sephora/how_might_we2.png';
import how_might_we3 from '../../assets/sephora/how_might_we3.png';
import credo from '../../assets/sephora/credo.png';
import ulta from '../../assets/sephora/ulta.png';
import amazon from '../../assets/sephora/amazon.png';
import clarity from '../../assets/sephora/clarity.png';
import efficiency from '../../assets/sephora/efficiency.png';
import eco_friendliness from '../../assets/sephora/eco_friendliness.png';
import persona1 from '../../assets/sephora/persona1.png';
import journey_map from '../../assets/sephora/journey_map.png';
import sketches from '../../assets/sephora/sketches.png';
import mid_fi_wireframes from '../../assets/sephora/mid_fi_wireframes.png';
import hi_fi_wireframes from '../../assets/sephora/hi_fi_wireframes.png';
import iteration1 from '../../assets/sephora/iteration1.png';
import iteration2 from '../../assets/sephora/iteration2.png';
import iteration3 from '../../assets/sephora/iteration3.png';
import task_flow from '../../assets/sephora/task_flow.png';
import illustration1 from '../../assets/sephora/illustration1.png';
import sephora_macbook from '../../assets/sephora/sephora_macbook.png';

export default function Sephora() {
  return (
    <div className="bg-offWhite">
      <div className="grid grid-cols-12 mb-10 sm:mb-20 mt-10 sm:mt-0">
        <div className="flex flex-col justify-center items-center mb-6 sm:mb-12 sm:mb-0 col-span-12 sm:col-start-2 sm:col-end-7">
          <h1 className="font-bold text-3xl sm:text-6xl text-offBlack pb-4">
            Sephora Recycle Feature
          </h1>
          <p className="text-lg sm:text-2xl text-center">
            A website feature that allows users to mail their old or unwanted
            cosmetics and packaging to Sephora for recycling.
          </p>
          <a
            href="https://www.figma.com/file/kV1FCexT4imVIc2BapHTpB/Sephora-Recycle-Feature-Wireframes?type=design&node-id=47%3A2&t=XeB5o0Zi9PKohavh-1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:text-secondary text-lg sm:text-2xl pointer"
          >
            <div className="flex items-center mt-4">
              <p className="mr-2">View Prototype</p>
              <FaArrowRight className="m-h-5" />
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center col-span-12  sm:col-start-8">
          <img
            className="pointer-events-none w-full h-auto"
            src={sephora_macbook}
            alt="Laptop preview"
          ></img>
          {/* <div className="relative" style={{ height: '600px', width: '300px' }}>
            {/* <img
              className="absolute z-20 pointer-events-none h-full w-auto"
              src={sephora_macbook}
              alt="Laptop preview"
            ></img> */}
          {/* <div
              className="mx-4 mb-0 hide-scrollbar rounded-lg iphone"
              style={{ marginTop: '14px' }}
            >
              <img
                src={sephora_macbook}
                className="max-w-full h-auto wireframe"
                alt="Mobile preview"
              ></img>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-accent text-white p-10 grid grid-cols-12 rounded-2xl mb-16 sm:mb-16 sm:mb-32">
        <div className="col-span-12 sm:col-span-3">
          <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Role</h4>
          <p className="text-lg sm:text-2xl mb-8 sm:mb-0">UX/UI designer</p>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Product</h4>
          <p className="text-lg sm:text-2xl mb-8 sm:mb-0">Website Feature</p>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Duration</h4>
          <p className="text-lg sm:text-2xl mb-8 sm:mb-0">April to May 2023</p>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <h4 className="mb-2 font-semibold text-2xl sm:text-3xl">Tools</h4>
          <p className="text-lg sm:text-2xl">Figma</p>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-12">
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
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
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
              src={how_might_we1}
              className="max-w-full h-auto"
              alt="How might we provide quality educational activities for parents and caregivers to do with their children at home?"
            ></img>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
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
            src={design_thinking_image}
            className="max-w-full h-auto mb-16 sm:mb-32"
            alt="Research, define, design, test"
          ></img>
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-12">
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
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
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
      <div className="bg-primary p-10 grid grid-cols-12 rounded-2xl mb-16 sm:mb-32">
        <div className="col-span-12 sm:col-span-4 flex flex-col items-center">
          <div className="flex items-center">
            <img
              src={credo}
              className="max-w-full h-auto"
              alt="Good logo"
              style={{ height: '114px' }}
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Website and store that carries only “clean beauty” products with
            focus on safety, sustainability, sourcing, ethics, and transparancy.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-4 flex flex-col items-center mt-8 sm:mt-0">
          <div className="flex items-center">
            <img
              src={ulta}
              className="max-w-full h-auto rounded-sm"
              alt="Cafe Olli logo"
              style={{ height: '114px' }}
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Storefront, website, and app that sells cosmetics as well as various
            beauty services. Ulta is very similar to Sephora.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-4 flex flex-col items-center mt-8 sm:mt-0">
          <div className="flex items-center">
            <img
              src={amazon}
              className="max-w-full h-auto"
              alt="Starbucks Logo"
              style={{ height: '114px' }}
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Amazon Premium Beauty is the luxury cosmetics section of the biggest
            online retailers. They carry products that can also be found in
            Sephora, ulta, and department stores.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-8 sm:mt-16">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
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
              <img
                src={eco_friendliness}
                className="max-w-full"
                alt="Convenience"
              ></img>
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
                src={efficiency}
                className="max-w-full h-auto"
                // style={{ maxWidth: '160px' }}
                alt="Ambiance"
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
              <img src={clarity} className="max-w-full" alt="Offerings"></img>
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
            <div
              className="bg-accent rounded mr-4"
              style={{ width: '10px' }}
            ></div>
            <p className="text-left text-lg sm:text-2xl">
              <strong>
                “ I love an in-store moment but realistically I mostly shop
                online for convenience unless it is something I need
                like...today.”
              </strong>
            </p>
          </div>
          <div className="flex mb-16 sm:mb-32">
            <div
              className="bg-accent rounded mr-4"
              style={{ width: '10px' }}
            ></div>
            <p className="text-left text-lg sm:text-2xl">
              <strong>
                “ I am really doing my best to shift to supporting companies
                that are open about their sourcing and business practices, but
                especially about their commitment to being eco-friendly.”
              </strong>
            </p>
          </div>
          <div className="flex mb-16 sm:mb-32">
            <div
              className="bg-accent rounded mr-4"
              style={{ width: '10px' }}
            ></div>
            <p className="text-left text-lg sm:text-2xl">
              <strong>
                “ I always try to recycle exterior packaging like boxes but I
                never know what to do with the makeup that I don’t use, so it
                just ends up sitting in my cabinet. ”
              </strong>
            </p>
          </div>
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={how_might_we2}
              className="max-w-full h-auto"
              alt="Cloud"
            ></img>
          </div>
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-12 ">
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
              <h2 className="text-2xl sm:text-4xl text-left font-semibold mb-6 sm:mb-12">
                Meet Wren
              </h2>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/journey_map.pdf"
                className="max-w-full h-auto mb-6 sm:mb-12 pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={persona1}
                  className="max-w-full h-auto mb-6 sm:mb-12 pointer"
                  alt="Link to user persona figma file"
                ></img>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl sm:text-4xl text-left font-semibold mb-6 sm:mb-12">
                Wren's Journey
              </h2>
              <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
                After getting to know our user Wren, I made a journey map as a
                visual representation of her journey to recycle cosmetics. This
                helped me understand what her actions, thoughts, behaviors, and
                emotions would be and therefore what her pain points might be so
                that I could better address them.
              </p>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/journey_map.pdf"
                className="max-w-full h-auto mb-6 sm:mb-12 pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={journey_map}
                  className="max-w-full h-auto mb-6 sm:mb-12 pointer"
                  alt="Link to user persona figma file"
                ></img>
              </a>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
            Determining the Problems to Solve
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-6 sm:mb-12">
            With the needs of our user identified, it was clear that there was a
            need for a website feature that <strong>was informative</strong>,
            and that provided an <strong>efficient</strong> way to recycle
            cosmetics.
            <br />
            The next question was: how can these goals be achieved with Sephora?
            Since one of the biggest pain points was efficiency, I wanted to
            ensure that the feature was{' '}
            <strong>quick and simple to use, easy to understand,</strong> and
            <strong>organized</strong> in a way that provided information about
            the company’s eco friendly practices.
          </p>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
            Finding the Flow
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            With the user’s problems in mind, the next steps were to determine
            our feature elements using a value matrix, and task flow. These
            tools helped give scaffolding to the design of the product.
          </p>
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={how_might_we3}
              className="max-w-full h-auto"
              alt="Mobile Preview"
            ></img>
          </div>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
            This <strong>value matrix</strong> helped me analyze and prioritize
            different values and factors that were important for the recycling
            feature. High impact items were prioritized, and specifically the
            high impact items that were also low effort as to save time getting
            an MVP designed. These included information on recycling cosmetics,
            tips for cleaning and preparing cosmetics for recycle, the option to
            add “recycle” to your basket while shopping, and earning beauty
            insider points for using the feature.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/value_matrix.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img
                  src={feature_set}
                  className="max-w-full h-auto"
                  alt="Feature Set"
                ></img> */}
              </a>
            </div>
          </div>
          <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
            These <strong>task flows</strong> helped determine exactly how the
            Sephora user would go about using the recycling feature. It was
            important to explore multiple task flows, since there would be
            multiple ways to access the feature. A user going to the site with
            the intention of recycling might choose the CTA, while other
            shoppers might discover the feature during checkout and add it to
            their basket then.
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
                  src={task_flow}
                  className="max-w-full h-auto"
                  alt="Site Map"
                ></img>
              </a>
            </div>
          </div>
          {/* <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/Learn+_+Grow+Sitemap+1.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={sitemap}
                  className="max-w-full h-auto"
                  alt="Site Map"
                ></img>
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="grid grid-cols-12 mb-16 sm:mb-32">
        <div className="col-span-12 sm:col-span-10 sm:col-start-2 items-center py-8 sm:py-20 px-6 rounded-2xl bg-primary grid grid-cols-12 sm:grid-cols-10">
          <div className="col-span-12 sm:col-span-8 sm:col-start-2 flex flex-col">
            <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-12">
              Design
            </h3>
            <p className="text-left text-lg sm:text-2xl mb-16 sm:mb-32">
              After determining my information architecture, i got to work
              creating concept sketches and worked on branding using Sephora and
              Pact’s existing design patterns and branding. Using the sketches
              and branding, I moved on to wireframes to develop a more complete
              design. I tried to focus on how the user interface could be most
              time efficient for our user, while still providing a{' '}
              <strong>delightful and inspiring experience.</strong>
            </p>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
              Early Sketches
            </h2>
            <p className="mb-6 sm:mb-12 text-start text-lg sm:text-2xl">
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
            <div className="flex justify-center items-center px-0 sm:px-16 mb-16 sm:mb-32">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/local_basket/sketches.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={sketches}
                  className="max-w-full h-auto"
                  alt="Link to figma file of early sketches"
                ></img>
              </a>
            </div>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
              UI Elements
            </h2>
            <div className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
              <p className="mb-10">
                With a general idea of how the site could be laid out, the next
                piece was deciding how I would create UI elements that would fit
                in seamlessly with Sephora’s existing design. Another piece to
                consider was using cards and illustrations similar to the ones
                Pact uses on their site, but through the Sephora lense. For
                colors, I used Sephora’s classic color palette of black and
                white with pops of red.
              </p>
            </div>
            <div className="flex justify-center items-center mb-16 sm:mb-32">
              <div>
                <a
                  href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/local_basket/mood_board.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={illustration1}
                    className="max-w-full h-auto"
                    alt="Product Ilustration"
                  ></img>
                </a>
              </div>
            </div>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
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
                  src={mid_fi_wireframes}
                  className="max-w-full h-auto"
                  alt="Link to figma file of mid fi wire frames"
                ></img>
              </a>
            </div>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
              High Fidelity UI
            </h2>
            <p className="text-start text-lg sm:text-2xl mb-6 sm:mb-12">
              This step is where the design really came together visually. I was
              able to fully design the Sephora recycling feature while keeping
              our persona, Wren in mind. A combination of custom made
              illustrations and real imagery gave the site the exact feel we
              were going for in a way that was simple, clean, and time
              efficient.
            </p>
            <a
              href="https://www.figma.com/file/kV1FCexT4imVIc2BapHTpB/Sephora-Recycle-Feature-Wireframes?type=design&node-id=12%3A542&t=XeB5o0Zi9PKohavh-1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:text-secondary text-lg sm:text-2xl pointer mb-10 sm:mb-20"
            >
              <div className="flex items-center">
                <p className="mr-2">View all designs in Figma</p>
                <FaArrowRight className="m-h-5" />
              </div>
            </a>
            <div className="flex justify-center items-center mt-8 sm:mt-16">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/hi_fi_wireframes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-full h-auto"
              >
                <img
                  src={hi_fi_wireframes}
                  className="max-w-full h-auto"
                  alt="Link to figma file of hi fi wire frames"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-12">
            Test
          </h3>
          <p className="text-start text-lg sm:text-2xl mb-6 sm:mb-12">
            At the end of the visual design portion came one of the most
            important parts of the Sephora Recycle Feature design process -
            testing. I felt confident about my overall design but conducting
            usability tests using the Figma prototype would give clarity and
            inform my further iterations.
          </p>
          <a
            href="https://www.figma.com/file/kV1FCexT4imVIc2BapHTpB/Sephora-Recycle-Feature-Wireframes?type=design&node-id=47%3A2&t=XeB5o0Zi9PKohavh-1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:text-secondary text-lg sm:text-2xl pointer"
          >
            <div className="flex items-center mb-16 sm:mb-32">
              <p className="mr-2">View Prototype</p>
              <FaArrowRight className="m-h-5" />
            </div>
          </a>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
            Usability Testing
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-10">
            I conducted usability testing sessions to test the process of
            choosing the recycle feature from the homepage CTA, following the
            multi page form, and adding to basket/checking out. I also included
            the flows for tracking the progress of the recycle mailer. I held
            usability testing sessions with three participants and documented
            all feedback.
          </p>
          <div className="text-start text-lg sm:text-2xl ">
            The usability test goals were:
            <ul className="list-disc ml-8 mb-10">
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
                src={sephora_macbook}
                className="max-w-full h-auto"
                alt="Cleverist iphone preview"
              ></img>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
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
          {/* <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/sephora/illustrations.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={analyzing_results1}
                  className="max-w-full h-auto"
                  alt="Analyzing results"
                ></img>
              </a>
            </div>
          </div> */}
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
            Final Iterations
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-6 sm:mb-12">
            Based on the test results, I made some priority revisions throughout
            the site based on how impactful it would be and how it would fit
            into the timeframe I had. Below are the main revisions that were
            made.
          </p>
          <ul className="list-disc ml-8 font-semibold text-lg sm:text-2xl text-left mb-10 sm:mb-20">
            <li className="mb-10 sm:mb-20">
              Clickable link to “learn more” about the Sephora x Pact recycle
              program.
              <div className="flex justify-center items-center mt-16 sm:mt-32">
                <div>
                  <img
                    src={iteration1}
                    className="max-w-full h-auto"
                    alt="Activity Filters"
                  ></img>
                </div>
              </div>
            </li>
            <li className="mb-10 sm:mb-20">
              Clarity was added in step 1, so that the user knows that if they
              choose “no” they will be directed to information about how and why
              to clean their cosmetics packaging.
              <div className="flex justify-center items-center mt-16 sm:mt-32">
                <div>
                  <img
                    src={iteration2}
                    className="max-w-full h-auto"
                    alt="Color Mixing"
                  ></img>
                </div>
              </div>
            </li>
            <li className="mb-6 sm:mb-12">
              Pop of “Sephora red” color was only added to item illustrations
              once chosen, as another indication that they were selected.
              Additionally, information was added for clarity on the quality
              that could be sent.
              <div className="flex justify-center items-center mb-16 sm:mb-32">
                <div>
                  <img
                    src={iteration3}
                    className="max-w-full h-auto"
                    alt="Comments"
                  ></img>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-12 p-10 sm:px-0 rounded-2xl bg-secondary mb-16 sm:mb-32">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-12">
            Next Steps
          </h3>
          <div className="mt-4 text-start text-lg sm:text-2xl mb-10">
            With more time, the next steps I would take on this design project
            would be:
            <ul className="list-disc ml-8 font-semibold">
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
      <div className="grid grid-cols-12 mb-16 sm:mb-32 sm:px-0 p-10 rounded-2xl bg-accent text-white">
        <div className="col-span-12 sm:col-span-8 sm:col-start-3">
          <h3 className="text-3xl sm:text-6xl text-center font-semibold mb-6 sm:mb-12">
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

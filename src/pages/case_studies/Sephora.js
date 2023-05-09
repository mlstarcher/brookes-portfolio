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
          <div className="relative" style={{ height: '600px', width: '300px' }}>
            <img
              className="absolute z-20 pointer-events-none h-full w-auto"
              src={sephora_macbook}
              alt="iphone 14"
            ></img>
            {/* <div
              className="mx-4 mb-0 hide-scrollbar rounded-lg iphone"
              style={{ marginTop: '14px' }}
            >
              <img
                src={sephora_macbook}
                className="max-w-full h-auto wireframe"
                alt="Mobile preview"
              ></img>
            </div> */}
          </div>
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
        <div className="col-span-12 sm:col-span-6 flex flex-col items-center">
          <div className="flex items-center" style={{ height: '114px' }}>
            <img
              src={credo}
              className="max-w-full h-auto"
              alt="Good logo"
            ></img>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            Website and store that carries only “clean beauty” products with
            focus on safety, sustainability, sourcing, ethics, and transparancy.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 flex flex-col items-center mt-8 sm:mt-0">
          <div className="flex items-center" style={{ height: '114px' }}>
            <img
              src={ulta}
              className="max-w-full h-auto rounded-sm"
              alt="Cafe Olli logo"
            ></img>
          </div>
          <p className="text-lg sm:text-2xl">
            Storefront, website, and app that sells cosmetics as well as various
            beauty services. Ulta is very similar to Sephora.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 flex flex-col items-center mt-8">
          <div className="flex items-center" style={{ height: '114px' }}>
            <img
              src={amazon}
              className="max-w-full h-auto"
              alt="Starbucks Logo"
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
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/local_basket/journey_map.pdf"
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
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/local_basket/journey_map.pdf"
                className="max-w-full h-auto mb-6 sm:mb-12 pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={jouney_map}
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
            need for a product that would allow users to{' '}
            <strong>
              find a local farmers market, browse their vendors and offerings,
              and place orders in advance.
            </strong>
          </p>
          <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            The next question was: how can these goals be achieved with Local
            Basket? Since one of the biggest pain points was{' '}
            <strong>navigation</strong>, I wanted to ensure that the app’s
            design was <strong>easy to understand</strong>, and{' '}
            <strong>organized</strong> in a way that made it as{' '}
            <strong>intuitive</strong> as possible.
          </p>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
            Finding the Flow
          </h2>
          {/* <p className="text-start text-lg sm:text-2xl mb-16 sm:mb-32">
            With the user’s problems in mind, the next steps were to determine
            our feature set, create a site map, and user flows. These tools
            helped give scaffolding to the design of the product.
          </p> */}
          <div className="flex flex-col items-center mb-16 sm:mb-32">
            <img
              src={how_might_we3}
              className="max-w-full h-auto"
              alt="Mobile Preview"
            ></img>
          </div>
          <p className="mb-10 sm:mb-20 text-start text-lg sm:text-2xl">
            The <strong>feature set</strong> shown here helped me to narrow in
            on which of our desired features were must-haves for a minimum
            viable product, versus which features would be nice but could be
            added in later iterations of the product. I chose the features in P1
            and P2 based primarily on competitor analysis because I wanted to
            user to feel a sense of familiarity in the flows on the app. I added
            several new features which were all based on the needs that users
            expressed in interviews.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/local_basket/feature_set.pdf"
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
            This <strong>user flow</strong> helped determine exactly the Local
            Basket user would go about placing an order ahead for pickup, which
            was very important to the design of the app. I wanted to work out
            which steps the user would take to complete this task, and what
            options would be available along the way. We start with the
            assumption that the user potentially has an account, and if not they
            can choose the option to make one. Next, the user can either choose
            to browse markets/products/vendors on the landing page, or search
            for vendors and products using a search bar. Once a category is
            chosen the flow is very similar to popular food delivery apps where
            the user can add items to their cart.
          </p>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/Learn+_+Grow+Sitemap+1.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img
                  src={user_flow}
                  className="max-w-full h-auto"
                  alt="Site Map"
                ></img> */}
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center mb-16 sm:mb-32">
            <div>
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/Learn+_+Grow+Sitemap+1.pdf"
                className="max-w-full h-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* TODO */}
                {/* <img
                  src={sitemap}
                  className="max-w-full h-auto"
                  alt="Site Map"
                ></img> */}
              </a>
            </div>
          </div>
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
              creating concept sketches and worked on branding using Local
              Basket’s core values. I focused on a clean and intuitive design
              that had a familiar flow that users could follow to place an
              order. The main features that were added for an MVP were{' '}
              <strong>placing an order</strong> for pickup,{' '}
              <strong>searching nearby markets, vendors</strong>, and{' '}
              <strong>products</strong>, and repeating a previous order. At the
              end of the order process, <strong>directories and maps</strong>{' '}
              were provided to help the user find their pickup location.
            </p>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
              Early Sketches
            </h2>
            <p className="mb-6 sm:mb-12 text-start text-lg sm:text-2xl">
              I began with some <strong>low fidelity</strong> concept sketches
              to get an idea of how things would look. While these were a great
              place to start, there was still a lot of UI work to do to pull it
              together. In these early sketches, the focus was seeing how the
              flows would be applied to the app. I wanted to see where each step
              of the flow would take the user. Starting with home page
              categories I included markets, vendors, and products.
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
              Branding
            </h2>
            <div className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
              <p className="mb-10">
                With a general idea of how the site could be laid out, the next
                piece was deciding how I would communicate the Local Basket
                values using inspiration, color pallette, and logo. I chose to
                use colors that were welcoming and earthy. The core values that
                I wanted to communicate with the overall branding were:
              </p>
              <ul className="list-disc ml-8">
                <li>Familiar</li>
                <li>Vibrant</li>
                <li>Organic</li>
                <li>Warm</li>
                <li>Approachable</li>
              </ul>
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
                    alt="Mood Board"
                  ></img>
                </a>
              </div>
            </div>
            <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
              Mid Fidelity Wireframes
            </h2>
            <p className="text-start text-lg sm:text-2xl mb-10 sm:mb-20">
              Based on the sketches, I created mid fidelity,{' '}
              <strong>responsive wireframes</strong> for mobile to see how users
              would work through a flow with more detail. I like to think of
              these as the blueprint stage. One main detail that was built upon
              was how the user and item ratings could be shown, as well as the
              layout of the maps and directories toward the end of the flow.
            </p>
            <div className="flex justify-center items-center mb-16 sm:mb-32">
              <a
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/local_basket/mid_fi_wireframes.pdf"
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
              The app came together beautifully, but I conducted usability
              testing to gather feedback on the new design. The feedback was
              great for the UI elements as well as the ease of completing tasks.
              Based on notes from the users, some changes needed to be made to
              elevate this design. The main change would be to{' '}
              <strong>
                create an opportunity for the user to order from multiple
                vendors at one market within one transaction.
              </strong>{' '}
              With this new feature, some elements needed to be changed to
              better support ordering from several vendors. A number icon was
              added to the basket rather than as a hovering button above
              navigation which would prevent clutter on the screen. Next, an
              accordion option at the end of checkout was added to allow users
              to see maps and directories for each vendor in an organized way.
            </p>
            <a
              href="https://www.figma.com/file/jqZaAtwzFzrSrt6Mb1nqRA/Cleverist-Wireframes?node-id=1%3A3&t=05AJXlKrrTlhUCzR-1"
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
                href="https://s3.us-west-2.amazonaws.com/brookestarcher.com/pdfs/local_basket/hi_fi_wireframes.pdf"
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
            important parts of the Guilder design process - testing. I felt
            confident about my overall design but conducting usability tests
            using the Figma prototype would give clarity and inform my further
            iterations.
          </p>
          <a
            href="https://www.figma.com/file/Ezh6ISzgp5C1WpG1js5Myz/Cleverist-Prototypes?node-id=0%3A1&t=BzMBsCR7T6rMBXQM-1"
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
            I conducted usability testing sessions to test the homepage, the
            process of creating an account, and the process of finding and
            saving an activity using filters. I held usability testing sessions
            with three participants and documented all feedback.
          </p>
          <div className="text-start text-lg sm:text-2xl ">
            The usability test goals were:
            <ul className="list-disc ml-8 mb-10">
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
            given for future iterations which will be applied to make the Local
            Basket App even easier and more delightful to use.
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
                  <li>
                    Adjusting the “items in basket” to being just a number on
                    the basket icon rather than a bar.
                  </li>
                  <li>
                    Users felt there should be away to place orders with
                    multiple vendors in one transaction.
                  </li>
                  <li>More information on parking and accessibility.</li>
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
                {/* <img
                  src={analyzing_results1}
                  className="max-w-full h-auto"
                  alt="Analyzing results"
                ></img> */}
              </a>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl text-start font-semibold mb-6 sm:mb-12">
            Final Iterations
          </h2>
          <p className="text-start text-lg sm:text-2xl mb-6 sm:mb-12">
            Based on the test results, I made some priority revisions throughout
            the app based on how impactful it would be and how it would fit into
            the timeframe I had. Below are the main revisions that were made.
          </p>
          <ul className="list-disc ml-8 font-semibold text-lg sm:text-2xl text-left mb-10 sm:mb-20">
            <li className="mb-10 sm:mb-20">
              Showing the items in basket as a number, rather than a hovering
              bar.
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
              The ability to add multiple orders from different vendors to one
              transaction was added. Vendors were listed separately at checkout,
              but joined as one transaction.
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
              To include more accessibility and parking information, I needed to
              keep the maps and directory but find a way to keep it clean and
              easy to view. I chose to make each vendor’s information pop out as
              an accordion to view.
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
                Creating designs for a potential “Vendor” side of the app.
              </li>
              <li>Add a grocery list feature.</li>
              <li>
                Include Information about other local events such as
                craft/makers markets.
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
            The Local Basket app was able to effectively connect users to
            farmers and makers in their community. In doing so, this app makes
            it easy to promote local agriculture, support eco-friendliness and
            sustainability, and improve access to fresh and healthy food which
            was what inspired me to choose this project from the start.
          </p>
          <p className="mb-10 text-left text-lg sm:text-2xl">
            My research and testing methods allowed me to identify user pain
            points and design a solution that addressed those issues, resulting
            in a successful outcome and a pleasant shopping experience that
            users would be happy to implement in their weekly routine.
          </p>
          <p className="mb-10 text-left text-lg sm:text-2xl">
            One big takeaway from this particular project was that although new
            design patterns are interesting to explore, users often prefer
            designs that are familiar to them so that they are as intuitive as
            possible. I believe I was able to use inspiration from other food
            ordering apps while still putting my own authentic spin on it.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function Welcome() {
  return (
      <div className="grid grid-cols-12 sm:mt-32 sm:mb-44 mt-8 mb-8">
        <div className="col-span-12 md:col-start-4 md:col-end-10">
          <img
            src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/global/welcome.png'}
            className="max-w-full sm:h-auto "
            alt="Portrait"
          ></img>
        </div>
      </div>
  );
}

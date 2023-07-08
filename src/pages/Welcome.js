import React from 'react';

export default function Welcome() {
  return (
      <div className="flex justify-center items-center sm:mt-28 sm:mb-44 mt-8 mb-8">
          <img
            src={'https://s3.us-west-2.amazonaws.com/brookestarcher.com/images/global/welcome.png'}
            className="max-w-full sm:h-auto"
            style={{maxHeight: "568px"}}
            alt="Portrait"
          ></img>
      </div>
  );
}

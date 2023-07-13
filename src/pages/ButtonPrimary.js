import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPrimary = ({ text, location, type }) => {
  return (
    <>
      {(type === "internal" || type === "") && <Link to={location}>
        <div className="font-bold uppercase rounded-full border-2 border-offBlack bg-primary hover:bg-secondary py-2 px-5 m-0 inline-block leading-none text-base">
          {text}
        </div>
      </Link>
      }
      {(type === "external") && <a href={location} target="_blank" rel="noopener noreferrer">
        <div className="font-bold uppercase rounded-full border-2 border-offBlack bg-primary hover:bg-secondary py-2 px-5 m-0 inline-block leading-none text-base">
          {text}
        </div>
      </a>
      }
    </>
  );
};

export default ButtonPrimary;

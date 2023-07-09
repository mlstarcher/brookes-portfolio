import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPrimary = ({ text, location, type }) => {
  return (
    <>
      {(type === "internal") && <Link to={location}>
        <div className="font-bold uppercase rounded-full border-2 border-offBlack bg-primary hover:bg-secondary p-4 m-0 inline-block">
          {text}
        </div>
      </Link>
      }
      {(type === "external") && <a href={location} target="_blank" rel="noopener noreferrer">
        <div className="font-bold uppercase rounded-full border-2 border-offBlack bg-primary hover:bg-secondary p-4 m-0 inline-block">
          {text}
        </div>
      </a>
      }
    </>
  );
};

export default ButtonPrimary;

import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPrimary = ({ text, location, type }) => {
  return (
    <>
      {(type === "internal") && <Link to={location}>
        <span className="font-bold uppercase rounded-full border-2 border-offBlack bg-primary hover:bg-secondary p-4 m-0">
          {text}
        </span>
      </Link>
      }
      {(type === "external") && <a href={location} target="_blank" rel="noopener noreferrer">
        <span className="font-bold uppercase rounded-full border-2 border-offBlack bg-primary hover:bg-secondary p-4 m-0">
          {text}
        </span>
      </a>
      }
    </>
  );
};

export default ButtonPrimary;

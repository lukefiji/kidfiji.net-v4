import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';

function Logo() {
  return (
    <Link to="/" tw="inline-block align-top">
      <svg viewBox="0 0 78 78" tw="w-12 md:w-16">
        <title>Luke Fiji logo</title>
        <g>
          <path
            fill="var(--text-primary)"
            d="M0,0v78h78V0H0z M36,55H15V23h6v27h15V55z M62.9,28H47v9h14v5H47v13h-5V23h20.9L62.9,28z"
          />
          <polygon
            fill="transparent"
            points="21,23 15,23 15,55 36,55 36,50 21,50"
          />
          <polygon
            fill="transparent"
            points="42,55 47,55 47,42 61,42 61,37 47,37 47,28 62.9,28 62.9,23 42,23"
          />
        </g>
      </svg>
    </Link>
  );
}

export default Logo;

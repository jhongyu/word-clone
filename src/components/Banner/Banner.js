import React from 'react';

function Banner({ status, children, gameStatus, guesses, answer }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;

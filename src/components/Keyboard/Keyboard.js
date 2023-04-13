import React from 'react';

import { KEY_ROWS } from '../../constants';

function getStatusByLetter(validateGuesses) {
  const statusObj = {};

  validateGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ validateGuesses }) {
  const statusByLetter = getStatusByLetter(validateGuesses);

  return (
    <div className="keyboard">
      {KEY_ROWS.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter) => {
            const className = statusByLetter[letter] ? `key ${statusByLetter[letter]}` : 'key';

            return (
              <div key={letter} className={className}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;

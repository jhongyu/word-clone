import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  const handleSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  const handleRestart = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus('running');
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guesses.length} handleRestart={handleRestart} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} handleRestart={handleRestart} />}
    </>
  );
}

export default Game;

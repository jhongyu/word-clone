import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setGuess(value.toUpperCase());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log({ guess });

    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default GuessInput;

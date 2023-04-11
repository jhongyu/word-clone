import React from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTentativeGuess(value.toUpperCase());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
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
        value={tentativeGuess}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default GuessInput;

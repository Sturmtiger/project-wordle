import React from "react";

function GuessInput({ handleSubmitGuessWord }) {
  const [guessWord, setGuessWord] = React.useState("");

  function handleOnSubmit(event) {
    event.preventDefault();
    handleSubmitGuessWord(guessWord);
    setGuessWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5-letter word"
        value={guessWord}
        onChange={(event) => {
          const upperCasedValue = event.target.value.toUpperCase();
          setGuessWord(upperCasedValue);
        }}
        required={true}
      />
    </form>
  );
}

export default GuessInput;

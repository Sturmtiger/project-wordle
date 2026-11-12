import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function handleSubmitGuessWord(tentativeGuessWord) {
    setGuessResults([
      ...guessResults,
      { value: tentativeGuessWord, id: crypto.randomUUID() },
    ]);
  }

  return (
    <>
      <GuessResults results={guessResults} />
      <GuessInput handleSubmitGuessWord={handleSubmitGuessWord} />
    </>
  );
}

export default Game;

import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");
  const [tentativeGuesses, setTentativeGuesses] = React.useState([]);

  function handleSubmitGuessWord(tentativeGuessWord) {
    const nextTentativeGuesses = [...tentativeGuesses, tentativeGuessWord];
    setTentativeGuesses(nextTentativeGuesses);

    if (tentativeGuessWord === answer) {
      setGameStatus("won");
    } else if (nextTentativeGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={tentativeGuesses} answer={answer} />
      <GuessInput
        handleSubmitGuessWord={handleSubmitGuessWord}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && (
        <WonBanner guessesNum={tentativeGuesses.length} />
      )}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;

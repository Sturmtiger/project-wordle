import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guessWord = results[index]?.value;

        return <Guess word={guessWord} key={index} />;
      })}
    </div>
  );
}

export default GuessResults;

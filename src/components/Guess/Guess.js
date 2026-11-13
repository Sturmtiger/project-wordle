import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ word, answer }) {
  const checkGuessResult = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        const letter = word?.[index];
        let cellClass = "cell";

        if (checkGuessResult) {
          cellClass += ` ${checkGuessResult[index].status}`;
        }

        return (
          <span className={cellClass} key={index}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;

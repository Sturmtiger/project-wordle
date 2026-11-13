import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({ children, status }) {
  let cellClass = "cell";

  if (status) {
    cellClass += ` ${status}`;
  }

  return <span className={cellClass}>{children}</span>;
}

function Guess({ word, answer }) {
  const checkGuessResult = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell key={index} status={checkGuessResult?.[index].status}>
          {checkGuessResult?.[index].letter}
        </Cell>
      ))}
    </p>
  );
}

export default Guess;

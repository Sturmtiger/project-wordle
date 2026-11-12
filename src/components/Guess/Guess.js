import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span className="cell" key={index}>
          {word ? word[index] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;

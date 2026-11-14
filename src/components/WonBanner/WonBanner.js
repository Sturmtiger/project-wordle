import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ guessesNum }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessesNum} {guessesNum > 1 ? "guesses" : "guess"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;

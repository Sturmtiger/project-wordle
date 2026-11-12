function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map(({ value, id }) => (
        <p className="guess" key={id}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;

const MovieForm = ({ onSubmit, onChange, query }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="movie search"
        value={query}
        onChange={onChange}
      />
      <button aria-label="search" type="submit"></button> {/* Search button */}
    </form>
  );
};

export default MovieForm;

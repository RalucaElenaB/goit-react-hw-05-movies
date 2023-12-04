const MovieForm = ({ onSubmit, onChange, query }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="search a movie"
        value={query}
        onChange={onChange}
      />
      <button aria-label="search" type="submit">
        <span>Search</span>
      </button>{' '}
      {/* Search button */}
    </form>
  );
};

export default MovieForm;

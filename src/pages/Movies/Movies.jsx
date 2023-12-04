import MovieForm from 'pages/Movies/components/MovieForm/MovieForm';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearch } from 'pages/Movies/ApiMovies';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); // Manages query parameter in URL
  const location = useLocation();

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');
      const fetchSeachedMovies = async newQuery => {
        const moviesResults = await getSearch(newQuery);
        setMovies(moviesResults);
      };
      fetchSeachedMovies(newQuery);
      resetForm();
    }
  }, [searchParams]);

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    setSearchParams({ query: query });
  };

  const resetForm = () => {
    setQuery('');
  };

  return (
    <div className="movie-page ">
      <h1>Movie Search</h1>
      <MovieForm
        onSubmit={handleFormSubmit}
        onChange={handleQueryChange}
        query={query}
      />
      <ul>
        {movies.map((movie, id) => (
          <li key={id}>
            <Link
              to={`./${movie.id}`}
              state={{ from: location.pathname + location.search }}
            >
              <div>{movie.title}</div>
            </Link>
            <img
              src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

<Link to="/Home">Back</Link>;

export default Movies;

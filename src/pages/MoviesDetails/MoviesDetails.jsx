import React, { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from './ApiMoviesDetails';
import { useLocation } from 'react-router-dom';
import Button from 'common/Button/Button';

<Link to="/Home">Back</Link>;

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState([]);
  const location = useLocation();
  const path = location?.state?.from ?? '/';

  useEffect(() => {
    const fecthCurrentMovie = async movieId => {
      const currentMovieResponse = await getMovieDetails(movieId);
      setCurrentMovie(currentMovieResponse);
    };
    fecthCurrentMovie(movieId);
  }, [movieId]);

  return (
    <>
      <Button />
      <h1 className="movie-h1">{currentMovie.title}</h1>

      <ul>
        <li>
          <h4>Genres</h4>
          {currentMovie.genres ? (
            currentMovie.genres.map(genre => (
              <p key={genre.id}>{genre.name} </p>
            ))
          ) : (
            <p>Unrecorded Genre</p>
          )}
        </li>
        <li>
          <h4>Original Language</h4>
          <p>{currentMovie.original_language}</p>
        </li>
        <li>
          <h4>Run Time</h4>
          <p>{currentMovie.runtime}</p>
        </li>
        <li>
          <h4>Votes</h4>
          <p>{currentMovie.vote_count}</p>
        </li>
      </ul>
      <Link className="cast" to="cast" state={{ from: path }}>
        Cast
      </Link>
      <Link className="reviews" to="reviews" state={{ from: path }}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};

export default MoviesDetails;

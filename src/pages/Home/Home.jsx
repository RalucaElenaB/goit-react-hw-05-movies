import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from './ApiHome';
import { Link } from 'react-router-dom';
import Loader from 'common/Loader/Loader';

import './Home.module.css';

const Home = () => {
  const [trendingData, setTrendingData] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delay = milliseconds =>
      new Promise(resolve => setTimeout(resolve, milliseconds));
    const fecthMovies = async () => {
      setLoading(true);
      await delay(1000);
      const movies = await getTrending();
      setTrendingData(movies);
    };

    fecthMovies();
    setLoading(false);
  }, []);

  return (
    <div className="home">
      {loading && <Loader />}
      <ul className="home-movies-list">
        {trendingData.map((movie, id) => (
          <li key={id} className="home-movies-item">
            <Link
              to={`./movies/${movie.id}`}
              state={{ from: location.pathname + location.search }}
            >
              <div className="home-movies-title">{movie.title}</div>
              <img
                className="home-movies-img"
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

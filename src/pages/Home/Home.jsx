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
    <>
      {loading && <Loader />}
      <ul>
        {trendingData.map((movie, id) => (
          <li key={id}>
            <Link
              to={`./movies/${movie.id}`}
              state={{ from: location.pathname + location.search }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

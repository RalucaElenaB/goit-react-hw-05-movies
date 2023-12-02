import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from './api';
import { Link } from 'react-router-dom';
import './Home.module.css';

const Home = () => {
  const [trendingData, setTrendingData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fecthMovies = async () => {
      const movies = await getTrending();
      setTrendingData(movies);
    };
    fecthMovies();
  }, []);

  return (
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
  );
};

export default Home;

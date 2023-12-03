import axios from 'axios';

const MOVIE_PATH = `movie/`;
const language = 'en-US';
const KEY_API = 'f69b218f7039aed7eae0062e90da9fdc';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const getMovieDetails = async movieID => {
  try {
    const res = await axios.get(
      `${MOVIE_PATH}${movieID}?api_key=${KEY_API}&language=${language}`
    );
    const movieDetails = res.data;
    return movieDetails;
  } catch (error) {
    console.log('Something went wrong with API request', error.message);
  }
};

export { getMovieDetails };

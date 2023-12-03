import axios from 'axios';

const getMovieCast = async movieId => {
  const CREDITS_PATH = `credits`;
  const language = 'en-US';
  const KEY_API = 'f69b218f7039aed7eae0062e90da9fdc';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  try {
    const res = await axios.get(
      `movie/${movieId}/${CREDITS_PATH}?api_key=${KEY_API}&language=${language}`
    );
    const movieCredits = res.data;
    return movieCredits;
  } catch (error) {
    console.log('Something wrong with API', error.message);
  }
};

export { getMovieCast };

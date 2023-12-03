import axios from 'axios';

const REVIEWS_PATH = `reviews`;
const language = 'en-US';

const KEY_API = 'f69b218f7039aed7eae0062e90da9fdc';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const getReviews = async movieId => {
  try {
    const res = await axios.get(
      `movie/${movieId}/${REVIEWS_PATH}?api_key=${KEY_API}&language=${language}`
    );
    const movieReviews = res.data;
    return movieReviews;
  } catch (error) {
    console.log('Something wrong with API', error.message);
  }
};

export { getReviews };

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getReviews } from 'pages/MoviesDetails/components/Reviews/ApiMoviesReviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    let mounted = true;
    getReviews(movieId).then(data => {
      if (mounted) {
        setReviewsData(data.results);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="reviews">
      <ul className="reviews-ul">
        {reviewsData.length === 0 ? (
          <li className="reviews-list">
            There are no reviews in the TMDB database for this film.
          </li>
        ) : (
          reviewsData.map((review, idx) => (
            <li key={idx}>
              <h4>Author</h4>
              <p className="reviews-p">{review.author}</p>
              <h4>Review</h4>
              <h5 className="reviews-h5">{review.content}</h5>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;

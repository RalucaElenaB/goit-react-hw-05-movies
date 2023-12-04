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
      {reviewsData.length === 0 ? (
        <p>
          There are no reviews in the TMDB database for this film.
        </p>
      ) : (
        reviewsData.map((review, idx) => (
          <div key={idx} className="reviews-item">
            <h4>Author</h4>
            <p className="reviews-p">{review.author}</p>
            <h4>Review</h4>
            <h5 className="reviews-h5">{review.content}</h5>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;

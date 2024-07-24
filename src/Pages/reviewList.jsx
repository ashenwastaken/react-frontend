// src/components/ReviewList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews } from '../Redux/Slices/reviewSlice';

const ReviewList = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const status = useSelector((state) => state.reviews.status);
  const error = useSelector((state) => state.reviews.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReviews());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading reviews: {error}</div>;
  }

  console.log(JSON.stringify(reviews));
  return (
    <div>
      <h1>Reviews List</h1>
      <ul>
        {Array.isArray(reviews) && reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>{review.name}</li>
          ))
        ) : (
          <li>No reviews available</li>
        )}
      </ul>
    </div>
  );
};

export default ReviewList;

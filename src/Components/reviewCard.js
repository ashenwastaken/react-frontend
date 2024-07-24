import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{review.title}</h5>
      <p className="card-text">{review.content}</p>
      <Link to={`/reviews/edit/${review._id}`} className="btn btn-primary">Edit</Link>
    </div>
  </div>
);

export default ReviewCard;

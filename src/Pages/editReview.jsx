import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewById, updateReview } from '../Redux/Slices/reviewSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const review = useSelector((state) => state.review.selectedReview);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(fetchReviewById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (review) {
      setTitle(review.title);
      setContent(review.content);
    }
  }, [review]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateReview({ id, title, content })).then(() => {
      navigate.push('/reviews');
    });
  };

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Edit Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Review</button>
      </form>
    </div>
  );
};

export default EditReview;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from '../Redux/Slices/reviewSlice';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReview({ title, content })).then(() => {
      navigate('/reviews');
    });
  };

  return (
    <div className="container mt-5">
      <h2>Add Review</h2>
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
        <button type="submit" className="btn btn-primary">Add Review</button>
      </form>
    </div>
  );
};

export default AddReview;

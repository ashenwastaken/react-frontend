import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../APIs/api'; 

// Async thunks
export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
  const response = await api.get('/reviews');
  return response.data;
});

export const addReview = createAsyncThunk('reviews/addReview', async (reviewData) => {
  const response = await api.post('/reviews/add', reviewData); 
  return response.data;
});

export const fetchReviewById = createAsyncThunk('reviews/fetchReviewById', async (id) => {
  const response = await api.get(`/reviews/${id}`); 
  return response.data;
});

export const updateReview = createAsyncThunk('reviews/updateReview', async (reviewData) => {
  const { id, ...rest } = reviewData;
  const response = await api.put(`/reviews/${id}`, rest); 
  return response.data;
});

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    status: 'idle', 
    error: null, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = Array.isArray(action.payload) ? action.payload : [];
        state.status = 'succeeded';
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addReview.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(addReview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchReviewById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReviewById.fulfilled, (state, action) => {
        state.reviews = state.reviews.map((review) =>
          review.id === action.payload.id ? action.payload : review
        );
        state.status = 'succeeded';
      })
      .addCase(fetchReviewById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateReview.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.map((review) =>
          review.id === action.payload.id ? action.payload : review
        );
        state.status = 'succeeded';
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reviewSlice.reducer;

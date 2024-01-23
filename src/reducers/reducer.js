import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchMovies = createAsyncThunk(
  'http://103.8.115.254:86/MobileApi/api/FilmShows/GetScheduleByDate',
  async () => {
    const response = await axios.get(
      'http://103.8.115.254:86/MobileApi/api/FilmShows/GetScheduleByDate',
      {
        params: {
          date: '03/03/2023',
        },
        headers: {
          authenticationtoken: '4DDED356-7D62-4194-A845-1E20D219439F',
        },
      },
    );
    return response.data;
  },
);
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: '',
    movies: '',
  },

  reducers: {
    incremented: state => {
      state.value++;
    },
    decremented: state => {
      if (state.value !== 0) {
        state.value--;
      }
    },
    reset: state => {
      state.value = 0;
    },
    addRandom: (state, actions) => {
      state.value += actions.payload.value;
      console.log('state=> ', current(state));
    },
    thunkMethod: state => {
      return (dispatch, actions)();
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {incremented, decremented, reset, addRandom} =
  counterSlice.actions;

export default counterSlice.reducer;

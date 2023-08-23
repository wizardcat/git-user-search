import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../types';

const initialState: UserInfo = {
  avatar_url: '',
  name: '',
  bio: '',
  html_url: '',
}

export const getUser = createAsyncThunk(
  'user/fetchUser',
  async (searchString: string, thunkAPI) => {
    try {
      const response = await fetch(`https://api.github.com/users/${searchString}`);

      if (response.status === 404) {
        return initialState;
      }

      const user = await response.json();

      return user;

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const searchSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.avatar_url = action.payload.avatar_url;
        state.bio = action.payload.bio;
        state.html_url = action.payload.html_url;
        state.name = action.payload.name;
      });
  },
});

export default searchSlice.reducer;

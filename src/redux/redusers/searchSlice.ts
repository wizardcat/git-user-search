import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../types';


export const getUser = createAsyncThunk(
  'user/fetchUser',
  async (searchString: string, thunkAPI) => {
    try {
      const response = await fetch(`https://api.github.com/users/${searchString}`);

      if (response.status === 404) {
        return undefined;
      }

      const user = await response.json();

      return user;

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: UserInfo = {
  avatar_url: '',
  name: '',
  bio: '',
  html_url: '',
}

export const searchSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {

        if (!action.payload) {
          state.avatar_url = initialState.avatar_url;
          state.bio = initialState.bio;
          state.html_url = initialState.html_url;
          state.name = initialState.name;
          return;
        };

        state.avatar_url = action.payload.avatar_url;
        state.bio = action.payload.bio;
        state.html_url = action.payload.html_url;
        state.name = action.payload.name;
      });
  },
});

export default searchSlice.reducer;

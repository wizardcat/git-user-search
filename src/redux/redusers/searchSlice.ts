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
        const user = action.payload ? action.payload : initialState;

        state.avatar_url = user.avatar_url;
        state.bio = user.bio;
        state.html_url = user.html_url;
        state.name = user.name;
      });
  },
});

export default searchSlice.reducer;

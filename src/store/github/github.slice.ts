import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const FAV_KEY = 'rfk';

interface GithubState {
  favourites: string[];
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]'),
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload);
      localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;

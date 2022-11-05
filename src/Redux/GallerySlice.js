import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// import { toast } from "react-toastify";

const persistConfig = { key: "myLibrary", storage };

const initialState = {
  myLibrary: [],
  query: "",
  selectedId: 894205,
};

export const GallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addSelectedId(state, action) {
      state.selectedId = action.payload;
    },

    addQuery(state, action) {
      state.query = action.payload;
    },
    addFilmToMyLibrary(state, action) {
      state.myLibrary.push(action.payload);
    },
    deleteFilmAtMyLibrary(state, action) {
      state.myLibrary = state.myLibrary.filter(
        (film) => film.id !== action.payload
      );
    },
  },
});

export const persistedGalleryReducer = persistReducer(
  persistConfig,
  GallerySlice.reducer
);

export const {
  addSelectedId,
  addQuery,
  addFilmToMyLibrary,
  deleteFilmAtMyLibrary,
} = GallerySlice.actions;

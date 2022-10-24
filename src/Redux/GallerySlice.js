import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// import { toast } from "react-toastify";

const persistConfig = { key: "myLibrary", storage };

const initialState = {
  filmGallery: [],
  myLibrary: [],
  page: 1,
  totalPages: 1,
  query: "",
  selectedId: 894205,
};

export const GallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    fetchFilmGallery(state, action) {
      state.filmGallery = action.payload;
    },
    addPage(state, action) {
      state.page = action.payload;
    },
    addSelectedId(state, action) {
      state.selectedId = action.payload;
    },
    addAllPages(state, action) {
      state.totalPages = action.payload;
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
  fetchFilmGallery,
  addPage,
  addSelectedId,
  addAllPages,
  addQuery,
  addFilmToMyLibrary,
  deleteFilmAtMyLibrary,
} = GallerySlice.actions;

import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const infoModalSlice = createSlice({
  name: 'infoModal',
  initialState,
  reducers: {
    openInfoCourseModal: (state) => {
      state.isOpen = true;
    },
    closeInfoCourseModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openInfoCourseModal, closeInfoCourseModal } =
  infoModalSlice.actions;

export default infoModalSlice.reducer;

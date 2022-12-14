import { createSlice } from "@reduxjs/toolkit";

interface userReducerState {
  initialStateDrag: null;
  initialStateQuickDrag: null;
}

const initialDragAndDrop: userReducerState = {
  initialStateDrag: null,
  initialStateQuickDrag: null,
};

export const userReducer = createSlice({
  name: "userData",
  initialState: initialDragAndDrop,
  reducers: {
    dragAndDropValue: (state: any, action) => {
      state.initialStateDrag = action.payload;
    },
    quickDragAndDropValue: (state: any, action) => {
      state.initialStateQuickDrag = action.payload;
    },
  },
});
export const { dragAndDropValue, quickDragAndDropValue } = userReducer.actions;
export default userReducer.reducer;

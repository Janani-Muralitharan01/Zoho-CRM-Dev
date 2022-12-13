import { createSlice } from "@reduxjs/toolkit";

interface userReducerState {
  initialStateDrag: null;
  initialStateDragAndDrop: null;
}

const initialDragAndDrop: userReducerState = {
  initialStateDrag: null,
  initialStateDragAndDrop: null,
};

export const userReducer = createSlice({
  name: "userData",
  initialState: initialDragAndDrop,
  reducers: {
    dragAndDropValue: (state: any, action) => {
      state.initialStateDrag = action.payload;
    },
    dragAndDropTotalValue: (state: any, action) => {
      state.initialStateDragAndDrop = action.payload;
    },
  },
});
export const { dragAndDropValue, dragAndDropTotalValue } = userReducer.actions;
export default userReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface userReducerState {
  initialStateDrag: null;
  initialStateQuickDrag: null;
  DialogOpenIndex: null;
}

const initialDragAndDrop: userReducerState = {
  initialStateDrag: null,
  initialStateQuickDrag: null,
  DialogOpenIndex: null,
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
    dragAndDropDialogOpenIndex: (state: any, action) => {
      state.DialogOpenIndex = action.payload;
    },
  },
});
export const {
  dragAndDropValue,
  quickDragAndDropValue,
  dragAndDropDialogOpenIndex,
} = userReducer.actions;
export default userReducer.reducer;

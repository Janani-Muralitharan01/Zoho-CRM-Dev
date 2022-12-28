import { createSlice } from '@reduxjs/toolkit';

interface userReducerState {
  initialStateDrag: null;
  initialStateQuickDrag: null;
  DialogOpenIndex: null;
  initialStartDragSuperAdmin: null;
}

const initialDragAndDrop: userReducerState = {
  initialStateDrag: null,
  initialStateQuickDrag: null,
  DialogOpenIndex: null,
  initialStartDragSuperAdmin: null,
};

export const userReducer = createSlice({
  name: 'userData',
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
    dragAndDropValueSuperAdmin: (state: any, action) => {
      state.initialStartDragSuperAdmin = action.payload;
    },
  },
});
export const {
  dragAndDropValue,
  quickDragAndDropValue,
  dragAndDropDialogOpenIndex,
  dragAndDropValueSuperAdmin,
} = userReducer.actions;
export default userReducer.reducer;

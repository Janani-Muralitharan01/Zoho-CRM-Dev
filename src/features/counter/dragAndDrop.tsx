import { createSlice } from "@reduxjs/toolkit";

interface userReducerState {
  initialStateDrag: null;
  initialStateQuickDrag: null;
  DialogOpenIndex: null;
  initialStartDragSuperAdmin: null;
  DialogIndex: null;
  PickListData: null;
  pickListDragableId: null;
}

const initialDragAndDrop: userReducerState = {
  initialStateDrag: null,
  initialStateQuickDrag: null,
  DialogOpenIndex: null,
  initialStartDragSuperAdmin: null,
  DialogIndex: null,
  PickListData: null,
  pickListDragableId: null,
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
    dragAndDropValueSuperAdmin: (state: any, action) => {
      // console.log("storeee", action.payload);
      state.initialStartDragSuperAdmin = action.payload;
    },
    dragAndDropDialogIndexSuperAdmin: (state: any, action) => {
      state.DialogIndex = action.payload;
    },
    pickListDropDownData: (state: any, action) => {
      state.PickListData = action.payload;
    },
    pickListDragableIdStore: (state, action) => {
      state.pickListDragableId = action.payload;
    },
  },
});
export const {
  dragAndDropValue,
  quickDragAndDropValue,
  dragAndDropDialogOpenIndex,
  dragAndDropValueSuperAdmin,
  dragAndDropDialogIndexSuperAdmin,
  pickListDropDownData,
  pickListDragableIdStore,
} = userReducer.actions;
export default userReducer.reducer;

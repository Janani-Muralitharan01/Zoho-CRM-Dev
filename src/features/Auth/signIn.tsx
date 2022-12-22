import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface userReducerState {
  signUpPage: null;
}

const initialSignUpPage: userReducerState = {
  signUpPage: null,
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (name: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8085/api/auth/register",
        name
      );
      console.log("store", response);
      return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data.message);
      console.log("error store", error);
    }
  }
);

export const userReducer = createSlice({
  name: "signUp",
  initialState: initialSignUpPage,
  reducers: {
    signUpPageValue: (state: any, action) => {
      state.signUpPage = action.payload;
    },
  },
});
export const { signUpPageValue } = userReducer.actions;
export default userReducer.reducer;

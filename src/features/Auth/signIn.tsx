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
  async (name, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:80/user/signup",
        name
      );
      // return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data.message);
      console.log("error", error);
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

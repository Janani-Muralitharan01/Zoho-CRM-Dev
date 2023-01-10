import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../components/Constant/Api";
import { BASEURL } from "../../components/Constant/const";

interface userReducerState {
  logInVerificationPage: null;

  error: any;
  isLoading: boolean;
  roles: null;
  status: string;
}

const initiallogInVerificationPage: userReducerState = {
  logInVerificationPage: null,
  status: "",
  error: "",
  roles: null,
  isLoading: false,
};

export const NewModuleCreation: any = createAsyncThunk(
  "module/moduleCreation",
  async (para1: object, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASEURL}/api/forms/createforms`,
        para1
      );

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const ModuleNameGet: any = createAsyncThunk(
  "module/moduleCreation",
  async (para1, thunkAPI) => {
    try {
      const response = await axios.get(`${BASEURL}/api/forms/getmodule`);

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userReducer = createSlice({
  name: "moduleCreation",
  initialState: initiallogInVerificationPage,
  reducers: {
    logInVerificationValue: (state: any, action) => {
      state.logInVerificationPage = action.payload;
    },
    resetStatus: (state, action) => {
      state.error = "";
      //   state.status = "";
    },
  },

  extraReducers: {
    [NewModuleCreation.pending]: (state: any) => {
      state.isLoading = true;
    },
    [NewModuleCreation.fulfilled]: (state: any, action: any) => {
      state.roles = action.payload;
    },
    [NewModuleCreation.rejected]: (state: any, action: any) => {
      state.status = "error";
    },
  },
});
export const { logInVerificationValue, resetStatus } = userReducer.actions;
export default userReducer.reducer;

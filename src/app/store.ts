import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../../src/features/freatures";

export const store = configureStore({
  reducer: reducers,
});

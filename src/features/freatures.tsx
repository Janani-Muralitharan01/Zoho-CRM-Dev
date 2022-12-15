import dashBoardIndex from "./counter/counterSlice";
import dragAndDrop from "./counter/dragAndDrop";
import signInReducer from "./Auth/signIn";

export const reducers = {
  user: dashBoardIndex,
  dragAndDrop: dragAndDrop,
  signIn: signInReducer,
};

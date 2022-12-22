import dashBoardIndex from "./counter/counterSlice";
import dragAndDrop from "./counter/dragAndDrop";
import signInReducer from "./Auth/signIn";
import logInReducer from "./Auth/logIn";

export const reducers = {
  user: dashBoardIndex,
  dragAndDrop: dragAndDrop,
  signIn: signInReducer,
  logIn: logInReducer,
};

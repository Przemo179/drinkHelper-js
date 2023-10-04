import { combineReducers } from "redux";
import ingredientReducer from "./redux/reducers/reducer";

export const rootReducer = combineReducers({
  ingredients: ingredientReducer
});

export const ApplicationState = rootReducer;
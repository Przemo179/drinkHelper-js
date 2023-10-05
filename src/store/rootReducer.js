import { combineReducers } from "redux";
import ingredientReducer from "./redux/reducers/reducerUserIngredients";
import ingredientDatabaseReducer from "./redux/reducers/reducerIngredientsDatabase";

export const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  ingredientsDatabase: ingredientDatabaseReducer
});

export const ApplicationState = rootReducer;
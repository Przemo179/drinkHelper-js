import { ADD_INGREDIENT } from "../constants/contants";

const apiCallDrinks = await fetch('http://localhost:4000/ingredients')
const data = await apiCallDrinks.json();
const dataAfterTranslation =  data.ingredientsList;

const initialState = {
  ingredientsDatabase : dataAfterTranslation,
};

const ingredientDatabaseReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_INGREDIENT:
      if(action.payload.reducerName === 'ingredientsDatabase') { 
        return { 
          ...state, 
          ingredientsDatabase: [...state.ingredientsDatabase, action.payload],
        };
      };
      return state;
    default :
      return state;
  }
};

export default ingredientDatabaseReducer;
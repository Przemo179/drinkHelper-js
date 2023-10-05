import { ADD_INGREDIENT, REMOVE_INGREDIENT, UPDATE_AMOUNTOF } from "../constants/contants";

const initialState = {
  ingredientsList : [],
};

const ingredientReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch(action.type) {
    case ADD_INGREDIENT :
      if(action.payload.reducerName === 'userIngredients') {
        return { 
          ...state, 
          ingredientsList: [...state.ingredientsList, action.payload],
        }
      }
      return state;
    case REMOVE_INGREDIENT :
      if(action.payload.reducerName === 'userIngredients') {
        return {
          ...state,
          ingredientsList: [
            ...state.ingredientsList.slice(0, action.payload.id),
            ...state.ingredientsList.slice(action.payload.id + 1)
          ],
        };
      }
      return state;
    case UPDATE_AMOUNTOF :
      if(action.payload.reducerName === 'userIngredients') {
        return {
          ...state,
          ingredientsList : [
            ...state.ingredientsList.map((ingredient) => {
              if(ingredient.id === action.payload.id) {
                return {
                  ...ingredient, 
                  amountOf: action.payload.amountOf
                };
              } else {
                return ingredient;
              }
            }),
          ],
        };
      }
      return state;
    default :
      return state;
  }
};

export default ingredientReducer;
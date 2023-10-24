import React from "react";
import { removeIngredient, updateAmountOf } from "../../store/redux/actions/actions";
import { connect } from "react-redux";
import '../../styles/autocomplete.scss';
import IngredientRow from "../../containers/ingredients/IngredientRow";

function IngredientTable ({ ingredients }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col col-lg-3">#</th>
          <th scope="col col-lg-3">Name</th>
          <th scope="col col-lg-6">Amount of</th>
          <th scope="col col-lg-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient, itemOrder) => {
        return (
          <IngredientRow
            key={ingredient.id}
            id={ingredient.id}
            itemOrder={itemOrder + 1}
            name={ingredient.label}
            amountOf={ingredient.amountOf}
          /> 
        )
        })}
      </tbody>
    </table>
  );
}

export default connect(
  (state) => ({
    ingredients: state.ingredients.ingredientsList,
  }),
  {
    removeIngredient: removeIngredient,
    updateAmountOf: updateAmountOf
  }
)(IngredientTable);


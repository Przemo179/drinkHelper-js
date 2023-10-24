import React from "react";
import '../../styles/autocomplete.scss';
import TdAmountOf from "./ChangeAmountOf";

function IngredientRow ({id, itemOrder, name, amountOf}) {
  return (
    <tr>
      <th scope="row">{itemOrder}</th>
      <td>{name}</td>
      <TdAmountOf
        key={id}
        id={id}
        amountOf={amountOf} />
      <td>image i akcja</td>
    </tr>
  );
}

export default IngredientRow;


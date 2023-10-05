import React, {useState} from "react";
import { MDBAutocomplete } from 'mdb-react-ui-kit';
import { addIngredient } from "../../store/redux/actions/actions";
import { connect } from "react-redux";

const customDefData = [
  { title: 'One', subtitle: 'Secondary text', id: 1 },
  { title: 'Two', subtitle: 'Secondary text', id: 2 },
  { title: 'Three', subtitle: 'Secondary text', id: 3 },
  { title: 'Four', subtitle: 'Secondary text', id: 4 },
  { title: 'Five', subtitle: 'Secondary text', id: 5 },
  { title: 'Six', subtitle: 'Secondary text', id: 6 },
];

function Autocomplete  ({ ingredients, addIngredient }) {
  const [customData, setCustomData] = useState(customDefData);

  const addSingleIngredient = () => () => {
    console.log(customData);

      addIngredient({
        id: customData[0].id,
        label: customData[0].title,
        unit: customData[0].subtitle,
        amountOf: 0,
        reducerName: 'userIngredients'
      });

      // onClosedClearInput();
  };


  const onCustomSearch = (value) => {
    setCustomData(customDefData.filter((item) => item.title.toLowerCase().startsWith(value.toLowerCase())));  
  }

  const onClosedClearInput = () => {
    console.log('xd');
    console.log(document.querySelector('.autocomplete-input'));
    document.querySelector('.autocomplete-input').value = '';
  }

  return (
    <div>
    <MDBAutocomplete
      data={customData}
      label='Example label'
      displayValue={(row) => row.title}
      onSearch={onCustomSearch}
      onClosed={onClosedClearInput}
      itemContent={(result) => (
          <div className='autocomplete-custom-item-title'>{result.title}</div>
      )}
    />
    <button onClick={addSingleIngredient()}>ggadsadsa</button>
    </div>
  );
}

export default connect(
  (state) => ({
    ingredients: state.ingredients.ingredientsList,
    ingredientsDatabase: state.ingredientsDatabase.ingredientsList
  }),
  {
    addIngredient: addIngredient,
  }
)(Autocomplete);


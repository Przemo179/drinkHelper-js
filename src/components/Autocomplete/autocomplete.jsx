import React, {useState} from "react";
import { MDBAutocomplete } from 'mdb-react-ui-kit';
import { addIngredient } from "../../store/redux/actions/actions";
import { connect } from "react-redux";
import '../../styles/autocomplete.scss';

function Autocomplete ({ ingredients, addIngredient, ingredientsDatabase}) {
  const [customData, setCustomData] = useState(ingredientsDatabase);
  const [successMsgContent, setSuccessMsgContent] = useState('');

  const addSingleIngredient = () => () => {
    if(ingredients.every(ingredient => ingredient.id !== customData[0].id)) {
      addIngredient({
        id: customData[0].id,
        label: customData[0].label,
        unit: customData[0].unit,
        amountOf: 0,
        reducerName: 'userIngredients'
      });
      setSuccessMsgContent(`You just added a <span class="fw-bold">${customData[0].label}</span> to your ingredients list`);
      document.querySelector('.alert-success').classList.remove('d-none');
      setTimeout(() => {
        document.querySelector('.alert-success').classList.add('d-none');
      }, 3000);
      document.querySelector('.autocomplete-input').value = '';
    } else {
      document.querySelector('.alert-danger').classList.remove('d-none');
    }
  };

  const onOpenAutocompete = () => {
    document.querySelector('.autocomplete-input').value = '';
    document.querySelector('.alert-danger').classList.add('d-none');
    document.querySelector('.alert-success').classList.add('d-none');

  }

  const onCustomSearch = (value) => {
    setCustomData(ingredientsDatabase.filter((item) => item.label.toLowerCase().startsWith(value.toLowerCase())));  
  }

  return (
    <div>
      <div className="d-flex align-items-center autocomplete-container">
        <MDBAutocomplete
          data={customData}
          label='Add Ingredient'
          displayValue={(row) => row.label}
          onSearch={onCustomSearch}
          onOpen={onOpenAutocompete}
          itemContent={(result) => (
              <div className='autocomplete-custom-item-title'>{result.label}</div>
          )}
        />
        <button className="btn btn-primary ms-1" onClick={addSingleIngredient()}>Sumbit</button>
      </div>
      <div className="alert alert-danger py-1 mt-2 d-none px-2" role="alert">
        This ingredient is already in your store!
      </div>
      <div className="alert alert-success d-none mt-2 py-1 px-2" dangerouslySetInnerHTML={{__html: successMsgContent}} role="alert">
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    ingredients: state.ingredients.ingredientsList,
    ingredientsDatabase: state.ingredientsDatabase.ingredientsDatabase
  }),
  {
    addIngredient: addIngredient,
  }
)(Autocomplete);


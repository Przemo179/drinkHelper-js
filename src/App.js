/* eslint-disable no-unused-expressions */
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import Autocomplete from './components/Autocomplete/autocomplete';
import IngredientTable from './components/Tables/ingredientTable';

function App() {

  // async function getDrinks() {
  //   const apiCallDrinks = await fetch('http://localhost:3000/drinks')
  //   const data = await apiCallDrinks.json();

  //   const dataAfterTranslation =  data.drinksList.map(drink => {
  //     const arrDrinkComposition = JSON.parse(drink.composition);
  //     const arrDrinkRecipe = JSON.parse(drink.recipe);
  //     drink.composition = arrDrinkComposition;
  //     drink.recipe = arrDrinkRecipe;
  //     return drink;
  //   })

  //   console.log('111', dataAfterTranslation);
  // }

  // async function getIngredients() {
  //   const apiCallDrinks = await fetch('http://localhost:3000/ingredients')
  //   const data = await apiCallDrinks.json();

  //   const dataAfterTranslation =  data.ingredientsList;

  //   console.log('222', dataAfterTranslation);
  // }

  // getDrinks();
  // getIngredients();

  return (
    <div className="container my-4">
      <Autocomplete></Autocomplete>
      <IngredientTable></IngredientTable>
    </div>
  );
}

export default App;

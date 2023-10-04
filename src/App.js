/* eslint-disable no-unused-expressions */
import logo from './logo.svg';
import './App.css';

function App() {

  async function getDrinks() {
    const apiCallDrinks = await fetch('http://localhost:3000/drinks')
    const data = await apiCallDrinks.json();

    const dataAfterTranslation =  data.drinksList.map(drink => {
      const arrDrinkComposition = JSON.parse(drink.composition);
      const arrDrinkRecipe = JSON.parse(drink.recipe);
      drink.composition = arrDrinkComposition;
      drink.recipe = arrDrinkRecipe;
      return drink;
    })

    console.log('111', dataAfterTranslation);
  }

  async function getIngredients() {
    const apiCallDrinks = await fetch('http://localhost:3000/ingredients')
    const data = await apiCallDrinks.json();

    const dataAfterTranslation =  data.ingredientsList;

    console.log('222', dataAfterTranslation);
  }

  getDrinks();
  getIngredients();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React, {useEffect, useState} from "react";
import Recipe from './recipe';
import './App.scss';
import NumberFormat from 'react-number-format';
import Modal from './Modal'

function App() {
  const APP_ID = 'eb530fce'
  const APP_KEY = '730323b6b9855b44a7d0b986fc21b352'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [isOpen, setIsOpen] = useState('false')

  useEffect( () => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className='App'>
      <form onSubmit={getSearch} className="search-form">
      <h1>Search for your favourite food!</h1>
        <input className="search-bar" type="text" value={search} onChange = {updateSearch} placeholder='Whats your favourite food?'/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className='recipe-grid'>
      {recipes.map(recipe => (
        <Recipe 
          key = {recipe.recipe.label}
          title = {recipe.recipe.label} 
          calories = {
          <NumberFormat value={recipe.recipe.calories} displayType={'text'} thousandSeparator={false} decimalScale={0} />
        }
          image = {recipe.recipe.image} className='image'
          ingredients = {recipe.recipe.ingredients}
          />
      ))} 
      </div>
    </div>
  );
}

export default App;

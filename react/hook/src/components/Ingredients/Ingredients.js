import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  // useEffect(()=> {
  //   fetch('https://dummy-hook-default-rtdb.firebaseio.com/ingredients.json').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     let loadedIngredients = [];

  //     for(const key in data) {
  //       loadedIngredients.push({
  //         id: key,
  //         title: data[key].title,
  //         amount: data[key].amount
  //       });
  //     }

  //     setUserIngredients(loadedIngredients);
  //   });
  // }, []);

  useEffect(()=> {
    console.log(userIngredients);
  }, [userIngredients]);
  
  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  }, [setUserIngredients]);

  const addIngredientHandler = ingredient => {
    fetch('https://dummy-hook-default-rtdb.firebaseio.com/ingredients.json',{
      method: 'POST',
      body: JSON.stringify(ingredient),
      header: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json();
    }).then(data => {
      setUserIngredients(prevIngredients => [
        ...prevIngredients,
        {id: data.name, ...ingredient}
      ]);
    });
  };

  const removeUserIngredients = (id) => {
    setUserIngredients(prevIngredients => prevIngredients.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeUserIngredients}/>
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;

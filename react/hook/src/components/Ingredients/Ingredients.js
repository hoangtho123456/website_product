import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../hooks/http';

const ingredientReducer = (state, action) => {
  switch(action.type) {
    case 'SET': return action.ingredients;
    case 'ADD': return [...state, action.ingredient];
    case 'DELETE': return state.filter(ing => ing.id !== action.id);
    default: throw new Error('Should not get there@@');
  }
}

// const httpReducer = (state, action) => {
//   switch(action.type) {
//     case 'SEND': return {loading: true, error: null};
//     case 'RESPONSE': return {...state, loading: false};
//     case 'ERROR': return {loading: false, error: action.errorData};
//     case 'CLEAR': return {...state, error: null};
//     default: throw new Error('Should not get there@@');
//   }
// }

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error: null});
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifier, clear } = useHttp();
  // const [error, setError] = useState();
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
    // console.log(userIngredients);
    if(!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({type: 'DELETE', id: reqExtra});
    } else if(!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({type: 'ADD', 
        ingredient: {id: data.name, ...reqExtra}
      });
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);
  
  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({type: 'SET', ingredients: filteredIngredients});
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    sendRequest('https://dummy-hook-default-rtdb.firebaseio.com/ingredients.json',
      'POST', JSON.stringify(ingredient), ingredient, 'ADD_INGREDIENT');
    // setIsLoading(true);
    // dispatchHttp({type: 'SEND'});
    // fetch('https://dummy-hook-default-rtdb.firebaseio.com/ingredients.json',{
    //   method: 'POST',
    //   body: JSON.stringify(ingredient),
    //   headers: {'Content-Type': 'application/json'}
    // }).then(response => {
    //   // setIsLoading(false);
    //   dispatchHttp({type: 'RESPONSE'});
    //   return response.json();
    // }).then(data => {
    //   // setUserIngredients(prevIngredients => [
    //   //   ...prevIngredients,
    //   //   {id: data.name, ...ingredient}
    //   // ]);
    //   dispatch({type: 'ADD', 
    //       ingredient: {id: data.name, ...ingredient}});
    // }).catch(error => {
    //   // setError(error.message);
    //   // setIsLoading(false);
    //   dispatchHttp({type: 'ERROR', errorData: error.message});
    // });
  }, [sendRequest]);

  const removeUserIngredients = useCallback((id) => {
    // setIsLoading(true);
    // dispatchHttp({type: 'SEND'});
    // fetch(`https://dummy-hook-default-rtdb.firebaseio.com/ingredients/${id}.json`,{
    //   method: 'DELETE'
    // }).then(res => {
    //   // setIsLoading(false);
    //   dispatchHttp({type: 'RESPONSE'});
    //   // setUserIngredients(prevIngredients => prevIngredients.filter((item) => item.id !== id));
    //   dispatch({type: 'DELETE', id: id});
    // }).catch(error => {
    //   // setError(error.message);
    //   // setIsLoading(false);
    //   dispatchHttp({type: 'ERROR', errorData: error.message});
    // });

    sendRequest(`https://dummy-hook-default-rtdb.firebaseio.com/ingredients/${id}.json`, 
      'DELETE', null, id, 'REMOVE_INGREDIENT');
  }, [sendRequest]);

  // const clearError = useCallback(() => {
  //   // setError(null);
  //   // dispatchHttp({type: 'CLEAR'});
  //   // setIsLoading(false);
  // },[]);

  const ingredientList = useMemo(() => {
    return(
      <IngredientList 
      ingredients={userIngredients} 
      onRemoveItem={removeUserIngredients}/>
    );
  }, [userIngredients, removeUserIngredients]);

  return (
    <div className="App">
      {/* {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>} */}
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      {/* <IngredientForm onAddIngredient={addIngredientHandler} 
      loading={httpState.loading}/> */}
      <IngredientForm onAddIngredient={addIngredientHandler} 
      loading={isLoading}/>

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        {/* <IngredientList ingredients={userIngredients} onRemoveItem={removeUserIngredients}/> */}
        {ingredientList}
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;

import React, {useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import './Search.css';
import useHttp from '../hooks/http';
import ErrorModal from '../UI/ErrorModal';

const Search = React.memo(props => {
  const [enteredFilter, setEnteredFilter] = useState('');
  const {onLoadIngredients} = props;
  const inputRef = useRef();
  const {
    isLoading,
    data,
    clear,
    error,
    sendRequest
  } = useHttp();

  useEffect(()=> {
    const timer = setTimeout(() => {
      if(enteredFilter === inputRef.current.value) {
        console.log(enteredFilter, inputRef.current.value);
        const query = enteredFilter.length === 0?'':`?orderBy="title"&equalTo="${enteredFilter}"`;
        sendRequest('https://dummy-hook-default-rtdb.firebaseio.com/ingredients.json'+query, 'GET');
        
        // fetch('https://dummy-hook-default-rtdb.firebaseio.com/ingredients.json'+query).then(response => {
        //   return response.json();
        // }).then(data => {
        //   let loadedIngredients = [];

        //   for(const key in data) {
        //     loadedIngredients.push({
        //       id: key,
        //       title: data[key].title,
        //       amount: data[key].amount
        //     });
        //   }

        //   onLoadIngredients(loadedIngredients);
        // });
      }
    }, 800);

    return () => { clearTimeout(timer); };
  }, [enteredFilter, inputRef, sendRequest]);

  useEffect(()=> {
    if(!isLoading && !error && data) {
      let loadedIngredients = [];
      for(const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        });
      }
      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading---</span>}
          <input type="text" 
            ref={inputRef}
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;

import React, {useState, useEffect} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [enteredFilter, setEnteredFilter] = useState('');
  const {onLoadIngredients} = props;

  useEffect(()=> {
    const query = enteredFilter.length === 0?'':`?orderBy="title"&equalTo="${enteredFilter}"`;
    fetch('https://dummy-hook-default-rtdb.firebaseio.com/ingredients.json'+query).then(response => {
      return response.json();
    }).then(data => {
      let loadedIngredients = [];

      for(const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount
        });
      }

      onLoadIngredients(loadedIngredients);
    });
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" 
          value={enteredFilter}
          onChange={event => setEnteredFilter(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;

import * as actionTypes from '../actions/actionsType';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updateArr = state.results.filter(item => item.id !== action.idElement);
    return updateObject(state, {results: updateArr});
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
            // return {
            //     ...state,
            //     results: state.results.concat({id: new Date(), value: action.result})
            // }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArr = [...state.results];
            // newArr.splice(id, 1);
            return deleteResult(state, action);
    }
    return state;
};

export default reducer;

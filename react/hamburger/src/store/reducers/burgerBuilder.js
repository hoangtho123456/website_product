import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    // ingredients: {
    //     salad: 0,
    //     bacon: 0,
    //     cheese: 0,
    //     meat: 0
    // },
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updateIngredient = { [action.ingredientsName]: state.ingredients[action.ingredientsName] + 1 };
    const updateIngredients = updateObject(state.ingredients, updateIngredient);
    const updatedState = {
        ingredients: updateIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientsName],
        building: true
    };
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updateIng = { [action.ingredientsName]: state.ingredients[action.ingredientsName] - 1 };
    const updateIngs = updateObject(state.ingredients, updateIng);
    const updatedSt = {
        ingredients: updateIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientsName],
        building: true
    };
    return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
            // const updateIngredient = { [action.ingredientsName]: state.ingredients[action.ingredientsName] + 1 };
            // const updateIngredients = updateObject(state.ingredients, updateIngredient);
            // const updatedState = {
            //     ingredients: updateIngredients,
            //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientsName]
            // };
            // return updateObject(state, updatedState);
            // {
            //     ...state,
            //     ingredients: updateIngredients, 
            //     // {
            //     //     ...state.ingredients,
            //     //     [action.ingredientsName]: state.ingredients[action.ingredientsName] + 1
            //     // },
            //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientsName]
            // }
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;

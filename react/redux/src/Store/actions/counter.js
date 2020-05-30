import * as actionsType from './actionsType';

export const increment = () => {
    return {
        type: actionsType.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionsType.DECREMENT
    }
};

export const add = (value) => {
    return {
        type: actionsType.ADD,
        val: value
    }
};

export const subtract = (value) => {
    return {
        type: actionsType.SUBTRACT,
        val: value
    }
};

import * as actionsType from './actionsType';

export const saveResult = (res) => {
    return {
        type: actionsType.STORE_RESULT,
        result: res
    } 
};

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(()=> {
            // var oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionsType.DELETE_RESULT,
        resultElId: id
    }
};

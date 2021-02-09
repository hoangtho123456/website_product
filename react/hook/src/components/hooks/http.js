import { useReducer, useCallback } from 'react';

const initialState= {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null
}

const httpReducer = (state, action) => {
  switch(action.type) {
    case 'SEND': return {loading: true, error: null, data: null, extra: null, identifier: action.identifier};
    case 'RESPONSE': return {...state, loading: false, data: action.respondData, extra: action.extra};
    case 'ERROR': return {loading: false, error: action.errorData};
    // case 'CLEAR': return {...state, error: null};
    case 'CLEAR': return initialState;
    default: throw new Error('Should not get there@@');
  }
}

const useHttp = () => {
  // const [httpState, dispatchHttp] = useReducer(httpReducer, 
  // //   {
  // //   loading: false, 
  // //   error: null,
  // //   data: null,
  // //   extra: null,
  // //   identifier: null
  // // }
  // );
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);
  const clear = useCallback(() => dispatchHttp({type: 'CLEAR'}), []);
  const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
    dispatchHttp({type: 'SEND', identifier: reqIdentifier});
    fetch(url,{
      method: method,
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res.json();
    }).then(res => {
      dispatchHttp({type: 'RESPONSE', respondData: res, extra: reqExtra});
    }).catch(error => {
      dispatchHttp({type: 'ERROR', errorData: error.message});
    });
  }, []);
  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    clear: clear
  };
}

export default useHttp;

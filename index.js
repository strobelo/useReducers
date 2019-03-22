import { useReducer } from 'react';

export default function useReducers(...reducers) {
    let dispatches = []
    const store = Object.assign(...reducers.map(reducer => {
        const [state, dispatch] = useReducer(reducer);
        dispatches.push(dispatch);
        return {[reducer.name]: state};
    }))
    const dispatchAll = async (action) => {
        dispatches.forEach(d => d(action));
    }
    return [store, dispatchAll]
}
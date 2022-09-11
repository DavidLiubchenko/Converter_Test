const moduleName = 'pairs';

const GET_PAIRS = `${moduleName}/GET_PAIRS`

const defaultState = {
    pairs: []
}

/*
    { type : GET_PAIRS, payload: [{...}] }
 */

export default (state = defaultState,{type, payload})=>{
    switch (type) {
        case GET_PAIRS:
            return {...state, posts: payload}
        default:
            return state;
    }
}

export const getPairs = () => async (dispatch)=>{
    dispatch({ type : GET_PAIRS, payload: [{id:1, main:'asd', subMain:'dsa', curr:'0.11'}] })
}
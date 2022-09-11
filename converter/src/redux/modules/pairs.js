const moduleName = 'pairs';

const GET_PAIRS = `${moduleName}/GET_PAIRS`
const GET_MAIN_PAIRS = `${moduleName}/GET_MAIN_PAIRS`

const defaultState = {
    currentRate: 2,
    pairs: [],
    mainPairs: []
}

/*
    { type : GET_PAIRS, payload: [{...}] }
 */

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_PAIRS:
            return {...state, pairs: payload}
        case GET_MAIN_PAIRS:
            return {...state, mainPairs: payload}
        default:
            return state;
    }
}

export const getMainPairs = () => async (dispatch) => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "NxGoLaAw5MBMAgNBoqxFBjISYUBpViZD");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    dispatch({
        type: GET_MAIN_PAIRS,
        payload: [
            {id: 1, curr: 'EUR', rate: 40},
            {id: 2, curr: 'USD', rate: 41}
        ]
    })

    // await fetch("https://api.apilayer.com/currency_data/live?source=UAH&currencies=EUR%2CUSD", requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //         dispatch({
    //             type: GET_MAIN_PAIRS,
    //             payload: [
    //                 {id: 1, curr: 'EUR', rate: 1/result.quotes['UAHEUR']},
    //                 {id: 2, curr: 'USD', rate: 1/result.quotes['UAHUSD']}
    //             ]
    //         })
    //     })
    //     .catch(error => console.log('error', error));


}
export const getPairs = () => async (dispatch) => {
    // const myHeaders = new Headers();
    // myHeaders.append("apikey", "NxGoLaAw5MBMAgNBoqxFBjISYUBpViZD");
    //
    // const requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow',
    //     headers: myHeaders
    // };
    //
    // fetch("https://api.apilayer.com/currency_data/live?source=UAH&currencies=EUR%2CUSD", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result.quotes,'result'))
    //     .catch(error => console.log('error', error));
    //
    // dispatch({ type : GET_PAIRS, payload: [{id:1, main:'asd', subMain:'dsa', curr:'0.11'}] })
}
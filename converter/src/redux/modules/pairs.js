import {defaultData} from "../defaultData";

const moduleName = 'pairs';

const myHeaders = new Headers();
myHeaders.append("apikey", "NxGoLaAw5MBMAgNBoqxFBjISYUBpViZD");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

const GET_PAIRS = `${moduleName}/GET_PAIRS`
const GET_DATA = `${moduleName}/GET_DATA`
const GET_MAIN_PAIRS = `${moduleName}/GET_MAIN_PAIRS`
const UPDATE_RATE_1 = `${moduleName}/UPDATE_RATE_1`
const UPDATE_RATE_2 = `${moduleName}/UPDATE_RATE_2`

const defaultState = {
    data: defaultData,
    rate1: 0,
    rate2: 0,
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
        case GET_DATA:
            return {...state, data: payload}
        case GET_MAIN_PAIRS:
            return {...state, mainPairs: payload}
        case UPDATE_RATE_1:
            return {...state, rate1: payload}
        case UPDATE_RATE_2:
            return {...state, rate2: payload}
        default:
            return state;
    }
}

export const getMainPairs = () => async (dispatch) => {
    const filterData = (obj) => {
        let data = [];
        for (let key of Object.keys(obj)) {
            data.push(key);
        }
        return data
    }

    await fetch("https://api.apilayer.com/currency_data/list", requestOptions)
        .then(response => response.json())
        .then(result => {
            dispatch({
                type: GET_MAIN_PAIRS,
                payload: filterData(result.currencies)
            })
        })
        .catch(error => console.log('error', error));

    await fetch("https://api.apilayer.com/currency_data/live?source=UAH&currencies=EUR%2CUSD", requestOptions)
        .then(response => response.json())
        .then(result => {
            dispatch({
                type: GET_MAIN_PAIRS,
                payload: [
                    {id: 1, curr: 'EUR', rate: Number((1 / result.quotes['UAHEUR']).toFixed(3))},
                    {id: 2, curr: 'USD', rate: Number((1 / result.quotes['UAHUSD']).toFixed(3))}
                ]
            })
        })
        .catch(error => console.log('error', error));


}

export const getRate1 = (pair1, pair2) => async (dispatch) => {
    await fetch(`https://api.apilayer.com/currency_data/live?source=${pair1}&currencies=${pair2}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            dispatch({
                type: UPDATE_RATE_1,
                payload: result.quotes[`${pair1}${pair2}`]
            })
        })
        .catch(error => console.log('error', error));
}

export const getRate2 = (pair1, pair2) => async (dispatch) => {
    await fetch(`https://api.apilayer.com/currency_data/live?source=${pair1}&currencies=${pair2}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            dispatch({
                type: UPDATE_RATE_2,
                payload: result.quotes[`${pair1}${pair2}`]
            })
        })
        .catch(error => console.log('error', error));
}


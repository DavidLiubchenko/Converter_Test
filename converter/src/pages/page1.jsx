import React, {useEffect, useState} from 'react';
import S from '../styles/input.module.scss'
import {data} from '../data'
import {useDispatch} from "react-redux";

const placeHolder = '100 usd'

const Page1 = () => {
    const dispatch = useDispatch()
    const [userText, setUserText] = useState('');
    const [baseCurr, setBaseCurr] = useState ('')
    const [convertValue, setConvertValue] = useState ('')
    const [pairs, setPairs] = useState([]);
    const [showAxiosData, setShowAxiosData] = useState([]);

    // useEffect(() => {
    //     let myHeaders = new Headers();
    //     myHeaders.append("apikey", "NxGoLaAw5MBMAgNBoqxFBjISYUBpViZD");
    //
    //     let requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow',
    //         headers: myHeaders
    //     };
    //     if (currentlyCurrency.length) {
    //         // @ts-ignore
    //         fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${arrCurrencies}&base=${currentlyCurrency}`, requestOptions)
    //             .then(response => response.json())
    //             .then(result => {
    //                 // @ts-ignore
    //                 dispatch(updateFetchData(result.rates))
    //             })
    //             .catch(error => console.log('error', error));
    //     }
    // }, []);

    // function fetchCurrency() {
    //     let myHeaders = new Headers();
    //     myHeaders.append("apikey", "NxGoLaAw5MBMAgNBoqxFBjISYUBpViZD");
    //
    //     let requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow',
    //         headers: myHeaders
    //     };
    //
    //     setTimeout(()=>{
    //         // @ts-ignore
    //         fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${pairs[1]}&from=${pairs[0]}&amount=${convertValue}`, requestOptions)
    //             .then(response => response.json())
    //             .then(result => {
    //                 setShowAxiosData([result.result, result.info.rate])
    //             })
    //             .catch(error => console.log('error', error));
    //     })
    // }

    return (
        <>
            <div className={S.form}>
                <input onChange={(e) => {
                    setUserText(e.target.value)
                }} type="text" placeholder={placeHolder} value={userText} onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                    }
                }}/>
                <div>
                    to
                </div>
                <div>
                    <select defaultValue={''}
                            // onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            //     setBaseCurr(event.target.value);
                            // }}
                        >
                        <option>1</option>
                        {data.map(el => <option key={el}>{el}</option>)}
                    </select>
                </div>

                <button onClick={() => {
                }}>Convert</button>
            </div>
            {/*{showAxiosData.length!==0&&<div>{`${convertValue} ${pairs[0]} to ${pairs[1]} = ${showAxiosData[0]} ${pairs[1]}; rate: ${showAxiosData[1]}`}</div>}*/}

        </>
    );
};

export default Page1


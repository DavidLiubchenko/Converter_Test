import React, {useEffect, useState} from 'react';
import S from '../styles/input.module.scss'
import {data} from '../data'
import {useDispatch} from "react-redux";

const placeHolder = '100 usd'

const Page1 = () => {
    const dispatch = useDispatch()
    const [userText, setUserText] = useState('');

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
                    <select defaultValue={''} onChange={()=>{}} >
                        <option>Select</option>
                        {data.map(el => <option key={el}>{el}</option>)}
                    </select>
                </div>

                <button onClick={() => {
                }}>Convert</button>
            </div>

        </>
    );
};

export default Page1


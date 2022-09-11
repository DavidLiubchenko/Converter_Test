import React, {useEffect, useState} from 'react';
import S from '../styles/input.module.scss'
import {data} from '../data'
import {useDispatch, useSelector} from "react-redux";

const placeHolder = '100'

const MainPage = () => {
    const dispatch = useDispatch()
    const currentRate = useSelector((state) => state.pairs.currentRate)
    const [number1, setNumber1] = useState(0);
    const [pair1, setPair1] = useState('');
    const [number2, setNumber2] = useState(0);
    const [pair2, setPair2] = useState('');

    return (
        <div className={S.form}>
            <div className={S.formElem}>
                <input
                    onChange={(e) => {
                        const value = e.target.value
                        setNumber1(value)
                        setNumber2(value * currentRate)
                    }}
                    type="number"
                    value={number1}
                />
                <select
                    defaultValue={''}
                    onChange={(e) => {
                        setPair1(e.target.value)
                    }}>
                    <option value={''}>Select</option>
                    {data.map(el => <option key={el}>{el}</option>)}
                </select>
            </div>
            <div>to</div>
            <div className={S.formElem}>
                <input
                    onChange={(e) => {
                        const value = e.target.value;
                        setNumber2(value);
                        setNumber1(value / currentRate);
                    }}
                    type="number"
                    value={number2}
                />
                <select
                    defaultValue={''}
                    onChange={(e) => {
                        setPair2(e.target.value)
                    }}>
                    <option value={''}>Select</option>
                    {data.map(el => <option key={el}>{el}</option>)}
                </select>
            </div>
        </div>
    );
};

export default MainPage


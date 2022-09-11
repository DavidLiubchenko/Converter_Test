import React, {useEffect, useState} from 'react';
import S from '../styles/input.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getRate1} from "../redux/modules/pairs";
import {getRate2} from "../redux/modules/pairs";

const fixed = (number) => Number(Number(number).toFixed(3))

const MainPage = () => {
    const dispatch = useDispatch()
    let rate1 = useSelector((state) => state.pairs.rate1)
    let rate2 = useSelector((state) => state.pairs.rate2)
    let data = useSelector((state) => state.pairs.data)
    const [mainRate, setMainRate] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [pair1, setPair1] = useState('');
    const [pair2, setPair2] = useState('');

    useEffect(() => {
        if(number1>0) {
            setNumber2(fixed(number1 * rate1))
        } else {
            setNumber1(fixed(number2 * rate1))
        }
        setMainRate(rate1)
    }, [rate1])

    useEffect(() => {
        if(number2>0) {
            setNumber1(fixed(number2 / rate2))
        } else {
            setNumber2(fixed(number1 * rate2))
        }
        setMainRate(rate2)
    }, [rate2])

    useEffect(() => {
        if (pair1.length && pair2.length) dispatch(getRate1(pair1, pair2))
    }, [pair1])

    useEffect(() => {
        if (pair1.length && pair2.length) dispatch(getRate2(pair1, pair2))
    }, [pair2])

    return (
        <div className={S.form}>
            <div className={S.formElem}>
                <input
                    onChange={(e) => {
                        const value = e.target.value
                        setNumber1(fixed(value))
                        setNumber2(fixed(value * mainRate))
                    }}
                    type="number"
                    value={number1}
                />
                <select
                    className={S.formSelect}
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
                        setNumber2(fixed(value));
                        setNumber1(fixed(value / mainRate));
                    }}
                    type="number"
                    value={number2}
                />
                <select
                    className={S.formSelect}
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


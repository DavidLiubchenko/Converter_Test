import React, {useEffect} from 'react';
import S from '../styles/modal.module.scss'
import {data} from '../data'
import {useDispatch, useSelector} from "react-redux";


export const Modal = () => {
    // const visibleModal = useSelector()
    const dispatch = useDispatch()
    //
    // if (!visibleModal)
    //     return <></>

    return (
        <div className={S.modal}>
            <div className={S.content}>
                <div>Select your main currency</div>
                <select defaultValue=''
                        onChange={(event) => {
                        }}>
                    <option value=''>Select</option>
                    <option>USD</option>
                    <option>UAH</option>
                    <option>EUR</option>
                    {data.map(el => <option key={el}>{el}</option>)}
                </select>
            </div>
        </div>
    );
};


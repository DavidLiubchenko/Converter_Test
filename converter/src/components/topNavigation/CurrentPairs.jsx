import React from 'react';
import S from '../../styles/navbar.module.scss'
import {useSelector} from "react-redux";

const Green = ({text}) => <span className={S.green}> {text} </span>

const CurrentPairs = () => {
    const mainPairs = useSelector((state) => state.pairs.mainPairs)

    return (
        <ul className={S.pairs}>
            <li><Green text={'EUR'}/> : {mainPairs[0]?.rate}</li>
            <li><Green text={'USD'}/> : {mainPairs[1]?.rate}</li>
        </ul>
    );
};

export default CurrentPairs;
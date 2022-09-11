import React from 'react';
import S from '../../styles/navbar.module.scss'
import {useSelector} from "react-redux";

const CurrentPairs = () => {
    const mainPairs = useSelector((state) => state.pairs.mainPairs)

    return (
        <ul className={S.pairs}>
            <li>EUR : {mainPairs[0]?.rate}</li>
            <li>USD : {mainPairs[1]?.rate}</li>
        </ul>
    );
};

export default CurrentPairs;
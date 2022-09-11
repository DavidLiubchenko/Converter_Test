import React from 'react';
import LinkPage from "./LinkPage";
import {data} from "../../../data";
import S from '../../../styles/navbar.module.scss'

const Pages = () => {
    return (
        <ul className={S.pages}>
            <LinkPage name={'Converter'} path={'/'}/>
            <LinkPage name={'Current rates'} path={'/second'}/>
            <li>
                <select defaultValue={''}
                        onChange={(event) => {
                        }}>
                    <option>Select</option>
                    {data.map(el => <option key={el}>{el}</option>)}
                </select>
            </li>
        </ul>
    );
};

export default Pages;
import React from 'react';
import LinkPage from "./LinkPage";
import S from '../../../styles/navbar.module.scss'

const Pages = () => {
    return (
        <ul className={S.pages}>
            <LinkPage name={'Converter'} path={'/'}/>
        </ul>
    );
};

export default Pages;
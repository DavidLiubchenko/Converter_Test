import React from 'react';
import S from '../../styles/navbar.module.scss'
import Pages from "./navPages/Pages";
import CurrentPairs from "./CurrentPairs";

export const Navbar = () => {
    return (
        <nav className={S.nav}>
            <CurrentPairs/>
            <Pages/>
        </nav>
    );
};


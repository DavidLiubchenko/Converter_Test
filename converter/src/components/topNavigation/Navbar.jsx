import React from 'react';
import S from '../../styles/navbar.module.scss'
import {useDispatch, useSelector} from "react-redux";
import Pages from "./navPages/Pages";
import CurrentPairs from "./CurrentPairs";


export const Navbar = () => {

    // const currentlyCurrency = useSelector()
    const dispatch = useDispatch()

    return (
        <nav className={S.nav}>
            <CurrentPairs/>


            <Pages/>
        </nav>
    );
};


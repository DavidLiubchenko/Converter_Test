import React from 'react';
import S from '../styles/navbar.module.scss'
import {Link} from "react-router-dom";
import {data} from "../data";
import {useDispatch, useSelector} from "react-redux";

export const Navbar = () => {

    // const currentlyCurrency = useSelector()
    const dispatch = useDispatch()

    return (
        <nav className={S.nav}>
            <ul>
                <li>
                    <Link to={{pathname: "/"}}>
                        <a href="/">Converter</a>
                    </Link>
                </li>
                <li>
                    <Link to={{pathname: "/second"}}>
                        <a href="">Current rates</a>
                    </Link>
                </li>
                <li>
                    <select defaultValue={''}
                            onChange={(event) =>{}}>
                        <option>1</option>
                        {data.map(el => <option key={el}>{el}</option>)}
                    </select>
                </li>
            </ul>
        </nav>
    );
};


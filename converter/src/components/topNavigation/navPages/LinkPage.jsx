import React from 'react';
import {Link} from "react-router-dom";

const LinkPage = ({name, path}) => {
    return (
        <li>
            <Link to={{pathname: `${path}`}}>
                <a href={path}>{name}</a>
            </Link>
        </li>
    );
};

export default LinkPage;
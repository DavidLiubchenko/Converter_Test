import {connect} from "react-redux";
import React, {useEffect} from 'react';
import {Navbar} from "./components/topNavigation/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";

import {getRate1 as getRate1Actions} from "./redux/modules/pairs";
import {getRate2 as getRate2Actions} from "./redux/modules/pairs";
import {getMainPairs as getMainPairsActions} from "./redux/modules/pairs";

function App({getMainPairs}) {
    useEffect(() => {
        getMainPairs()
    }, [])

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default connect(
    ({pairs}) => ({pairs: pairs.pairs}),
    {
        getRate1: getRate1Actions,
        getRate2: getRate2Actions,
        getMainPairs: getMainPairsActions
    }
)(App);
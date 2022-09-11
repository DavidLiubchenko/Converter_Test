import {connect, useDispatch} from "react-redux";
import React, {useEffect} from 'react';
import {Navbar} from "./components/topNavigation/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

import {getPairs as getPairsActions} from "./redux/modules/pairs";
import {getMainPairs as getMainPairsActions} from "./redux/modules/pairs";

function App({pairs, getPairs, getMainPairs}) {
    useEffect(()=>{
        getMainPairs()
    },[])

    return (
        <BrowserRouter>
            {/*<Modal/>*/}
            <Navbar/>
            <Routes>
                <Route path="/" element={<Page1/>}/>
                <Route path="/second" element={<Page2/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default connect(
    ({pairs}) => ({pairs}),
    {
        getPairs: getPairsActions,
        getMainPairs: getMainPairsActions
    }
)(App);
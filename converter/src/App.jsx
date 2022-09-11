import './App.css';
import {connect} from "react-redux";
import React from 'react';
import {Navbar} from "./components/Navbar";
import {Modal} from "./components/modal";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

import {getPairs as getPairsActions} from "./redux/modules/pairs";

function App({pairs}) {
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
    ({posts})=>({posts}),
    {
        getPosts: getPairsActions
    }
)(App);
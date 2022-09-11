import './App.css';
import {connect} from "react-redux";

import {getPairs as getPairsActions} from "./redux/modules/pairs";

function App({posts}) {
    return (
        <div className="App">
Hello
        </div>
    );
}

export default connect(
    ({posts})=>({posts}),
    {
        getPosts: getPairsActions
    }
)(App);
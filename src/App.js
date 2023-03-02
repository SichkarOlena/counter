import React from 'react';
import BlockCounter from './components/BlockCounter';
import CONSTANTS from "./constants";

const App = () => {
    const {step} = CONSTANTS;

    return <BlockCounter step={step}/>;
}

export default App;



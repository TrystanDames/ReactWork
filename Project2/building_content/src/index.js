import React from 'react';
import ReactDom from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

const App = () => {
 
    return (
        <div>
            <label className="label" for="name">Enter name: </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button>
        </div>
    );
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);
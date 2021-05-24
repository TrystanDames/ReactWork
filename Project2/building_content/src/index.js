import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    const buttonText = {text: 'Click me'};
    const style = {backgroundColor: 'blue', color: 'white'}
    const labelText = 'Enter name:'
 
    return (
        <div>
            <label className="label"  htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    );
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);
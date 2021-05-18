import React from 'react';
class Example1 extends React.Component {
// Initialising state
state = {
	name: 'GFG',
};

handler = (name) => {
	// Changing the state
	this.setState({ name: name });
};

render() {
	return (
	<div>
		<h1>Name:{this.state.name}</h1>
		<h1>Click here to change the name</h1>

		{/* Passing the name as an argument
		to the handler() function */}

		<button onClick={this.handler.bind(this, 'GeeksForGeeks')}>
		Click Here
		</button>
	</div>
	);
}
}

export default Example1;

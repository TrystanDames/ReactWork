import React from 'react';
class Example2 extends React.Component {
// Initialising state
state = {
	name: 'Code College',
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
		to the handler() function
		with modern ES6 feature*/}

		<button onClick={() => this.handler('GeeksForGeeks')}>
		Click Here
		</button>
	</div>
	);
}
}

export default Example2;

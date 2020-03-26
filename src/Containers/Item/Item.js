import React, { Component } from 'react';

class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			person: '',
			itemName: '',
		};
	}

	render() {
		return <div className="container"></div>;
	}
}

export default Item;

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
	constructor() {
		super();
		this.state = {
			items: [],
		};
	}
	addNewItem = () => {
		const { items } = { ...this.state };
		const ids = items.map(({ id }) => id && id);
		const maximum_id = ids.length > 0 ? Math.max(...ids) : 0;
		items.push({ id: maximum_id + 1 });
		this.setState({ items });
	};
	render() {
		return (
			<div>
				<header>Sample Test Driven Development Project</header>
				<Button className="btn-add" onClick={this.addNewItem}>
					Add New Item
				</Button>
			</div>
		);
	}
}

export default App;

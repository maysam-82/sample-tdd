import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Item from '../Item/Item';

class App extends Component {
	constructor() {
		super();
		this.state = {
			items: [],
		};
	}
	onAddItem = () => {
		const { items } = { ...this.state };
		const ids = items.map(({ id }) => id && id);
		const maximum_id = ids.length > 0 ? Math.max(...ids) : 0;
		items.push({ id: maximum_id + 1 });
		this.setState({ items });
	};
	onRemoveItem = itemId => {
		const { items } = this.state || {};
		const filteredItemsWithoutItemId = items && items.filter(({ id }) => id !== itemId);
		this.setState({ items: filteredItemsWithoutItemId });
	};
	render() {
		const { items } = this.state;
		return (
			<div className="container">
				<header className="header">Sample Test Driven Development Project</header>
				<div className="items-list">
					{items && items.length
						? items.map(({ id }) => {
								return <Item key={id} itemId={id} onRemoveItem={this.onRemoveItem} />;
						  })
						: null}
				</div>
				<Button className="btn-add" onClick={this.onAddItem}>
					Add New Item
				</Button>
			</div>
		);
	}
}

export default App;

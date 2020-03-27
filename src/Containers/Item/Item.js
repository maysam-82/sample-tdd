import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import classes from './item.module.scss';
class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			person: '',
			itemName: '',
		};
	}
	onInputChanged = event => {
		const {
			target: { value, name },
		} = event;
		this.setState({ [name]: value });
	};

	render() {
		const { itemId, onRemoveItem } = this.props;
		return (
			<div className={classes.itemContainer}>
				<Form>
					<Form.Group>
						<Form.Label>Person Name</Form.Label>
						<Form.Control
							className="input-person"
							onChange={event => this.onInputChanged(event)}
							name="person"
						/>
						<Form.Label>Item Name</Form.Label>
						<Form.Control
							className="input-item-name"
							onChange={event => this.onInputChanged(event)}
							name="itemName"
						/>
					</Form.Group>
					<Button className={classes.btnRemove} onClick={() => onRemoveItem(itemId)}>
						Remove Item
					</Button>
				</Form>
			</div>
		);
	}
}

export default Item;

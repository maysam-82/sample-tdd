import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

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
			target: { value },
		} = event;
		this.setState({ person: event.target.value });
	};

	render() {
		return (
			<div className="container">
				<Form>
					<Form.Group>
						<Form.Label>Person Name</Form.Label>
						<Form.Control className="input-person" onChange={event => this.onInputChanged(event)} />
					</Form.Group>
				</Form>
			</div>
		);
	}
}

export default Item;

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
	const app = shallow(<App />);
	it('renders correctly', () => {
		expect(app.debug()).toMatchSnapshot();
	});
	it('initializes the `state` with an empty list of items', () => {
		expect(app.state().items).toEqual([]);
	});
	it('adds a new item to `state` items array while clicking the `add items` button', () => {
		app.find('.btn-add').simulate('click');
		expect(app.state().items).toEqual([{ id: 1 }]);
	});
});

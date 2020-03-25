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
	describe('while clicking on `add items` button', () => {
		beforeEach(() => {
			app.find('.btn-add').simulate('click');
		});
		afterEach(() => {
			app.setState({ items: [] });
		});
		it('adds a new item to `state` items array', () => {
			expect(app.state().items).toEqual([{ id: 1 }]);
		});
		it('adds new item to items list component', () => {
			expect(app.find('.items-list').children().length).toEqual(1);
		});
	});
});

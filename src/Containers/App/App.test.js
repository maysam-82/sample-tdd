import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
	const app = shallow(<App />);
	const itemId = 1;
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
			expect(app.state().items).toEqual([{ id: itemId }]);
		});
		it('adds new item to items list component', () => {
			expect(app.find('.items-list').children().length).toEqual(1);
		});
		it('should create Item component', () => {
			expect(app.find('Item').exists()).toBe(true);
		});
	});
	describe('while clicking on `Add Item` button', () => {
		beforeEach(() => {
			app.instance().onAddItem();
		});
		it('should add item according to `items` in `state`', () => {
			expect(app.state().items).toEqual([{ id: itemId }]);
		});
	});
	describe('while clicking on `remove` button', () => {
		beforeEach(() => {
			app.instance().onRemoveItem(itemId);
		});
		it('should remove item according to its `id`', () => {
			expect(app.state().items).toEqual([]);
		});
	});
});

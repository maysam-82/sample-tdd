import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Item Component', () => {
	const mockRemove = jest.fn();
	const itemId = 1;
	const props = { itemId, onRemoveItem: mockRemove };
	const item = shallow(<Item {...props} />);
	it('should render correctly', () => {
		expect(item.debug()).toMatchSnapshot();
	});
	it('initializes a person and its item in `state`', () => {
		expect(item.state()).toEqual({ person: '', itemName: '' });
	});
	describe('while entering name of person in input', () => {
		const personName = 'Father';
		beforeEach(() =>
			item.find('.input-person').simulate('change', { target: { value: personName, name: 'person' } })
		);
		it('should update `person` in `state`', () => {
			expect(item.state().person).toEqual(personName);
		});
	});
	describe('while entering name of item in input', () => {
		const itemName = 'Computer';
		beforeEach(() =>
			item.find('.input-item-name').simulate('change', { target: { value: itemName, name: 'itemName' } })
		);
		it('should update `itemName` in `state`', () => {
			expect(item.state().itemName).toEqual(itemName);
		});
	});
	describe('while clicking on `remove item` button', () => {
		item.find('.btn-remove').simulate('click');
		it('should call `onRemoveItem` callback', () => {
			expect(mockRemove).toHaveBeenCalledWith(itemId);
		});
	});
});

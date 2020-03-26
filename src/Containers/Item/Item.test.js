import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Item Component', () => {
	const item = shallow(<Item />);
	it('should render correctly', () => {
		expect(item.debug()).toMatchSnapshot();
	});
	it('initializes a person and its item in `state`', () => {
		expect(item.state()).toEqual({ person: '', itemName: '' });
	});
});

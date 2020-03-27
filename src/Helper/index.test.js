import { maxNumber, getArrayOfValuesByKey } from './index';
describe('returning max number', () => {
	describe('given an empty array', () => {
		it('should return 0', () => {
			expect(maxNumber([])).toEqual(0);
		});
	});
	describe('given an array of number `[1,2,3]`', () => {
		it('should return 3', () => {
			expect(maxNumber([1, 2, 3])).toEqual(3);
		});
	});
});

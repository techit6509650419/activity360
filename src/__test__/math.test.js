const math = require('../math');

describe('Math function', () => {
   describe('Add Function', () => {
    test('add 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });
   });
   describe('Subtract Function', () => {
    test('add 2 - 2 to equal 2', () => {
        expect(2 - 2).toBe(0);
    });
   });
   describe('Multipy Function', () => {
    test('add 2 * 2 to equal 2', () => {
        expect(2 * 2).toBe(4);
    });
   });

});
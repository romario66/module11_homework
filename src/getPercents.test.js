const getPercents = require('./getPercents.js');

describe('Testing function getPercents', () => {
    it('Need to work properly with integers', () => {
        expect(getPercents(45, 20)).toBe(9);
    }),
    it('Need to work properly with float', () => {
        expect(getPercents(1000, 45.5)).toBe(455);
    }),
    it('Should abort with negative or zero paremeter', () => {
        expect(getPercents(10, -5)).toBe('Percent or num must be a positive number');
        expect(getPercents(100, 0)).toBe('Percent or num must be a positive number');
    }),
    it('Should abort with non numeric parameter', () => {
        expect(getPercents(10, 'aaa')).toBe('Percent or num must be a number');
        expect(getPercents(true, 0)).toBe('Percent or num must be a number');
        expect(getPercents({}, 50)).toBe('Percent or num must be a number');
    })
})
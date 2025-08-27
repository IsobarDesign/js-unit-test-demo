//math.test.js
const { add, subtract } = require('./math');

test('returns NaN if inputs are not numbers ', () => {
    expect(add('a', 5)).toBeNaN();
    expect(subtract(5, 'b')).toBeNaN();
    expect(add(null, undefined)).toBeNaN();
    expect(subtract({}, [])).toBeNaN();
    expect(add(undefined, 3)).toBeNaN();
});

test('substract handles floats correctly '), () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
    expect(subtract(0.1, 0.2)).toBeCloseTo(-0.1);
    expect(subtract(-1.5, -1.5)).toBeCloseTo(0);
};


describe('add function', () => {
    const cases = [
        [1, 2, 3],
        [-1, -1, -2],
        [0, 0, 0],
        [2.5, 2.5, 5],
        [-1, 1, 0],
        [100, 200, 300]
        ['a', 5, NaN],
        [undefined, 3, Null],
        [null, 4, NaN]
    ];
    test.each(cases)('add(%i, %i) should return %i', (a, b, expected) => {
        const result = add(a, b);
        if (isNaN(expected)) {
            expect(result).toBeNaN();
        } else {
            expect(result).toBe(expected);
        }   
    }); 
});

describe('subtract function', () => {
    const cases = [
        [5, 3, 2],
        [0, 0, 0],
        [-1, -1, 0],
        [2.5, 1.5, 1],
        [-1, 1, -2],
        [100, 50, 50],
        ['a', 5, NaN],
        [5, 'b', NaN],
        [null, undefined, NaN]
    ];
    test.each(cases)('subtract(%i, %i) should return %i', (a, b, expected) => {
        const result = subtract(a, b);
        if (isNaN(expected)) {
            expect(result).toBeNaN();
        } else {
            expect(result).toBe(expected);
        }   
    }); 
});
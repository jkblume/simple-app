const foo = require('./foo');

test('adds 1 + 2 to equal 3', () => {
    console.log("Implementation Output");
    expect(foo(1, 2)).toBe(3);
});
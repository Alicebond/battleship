import {
  Ship
} from "./script";

test('length', () => {
  for (let i = 1; i < 5; i++) {
    expect(Ship(i).length).toEqual(i);
    expect(Ship(i).location.length).toEqual(i);
  };
});

test('location', () => {
  for (let i = 1; i < 5; i++) {
    expect(Ship(i).location.join('')).toMatch(/^[0-9]*$/);
  }
});

// test('hit', () => {
// })

test('isSunk', () => {
  for (let i = 1; i < 5; i++) {
    expect(Ship(i).isSunk(0)).toBeTruthy();
    expect(Ship(i).isSunk(1)).toBeFalsy();
    expect(Ship(i).isSunk(2)).toBeFalsy();
    expect(Ship(i).isSunk(3)).toBeFalsy();
    expect(Ship(i).isSunk(4)).toBeFalsy();
  }
});

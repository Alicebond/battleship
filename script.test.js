import {
  Ship,
  Gameboard,
} from "./script";

describe('Ship function tests', () => {
  test('length', () => {
    for (let i = 1; i < 5; i++) {
      expect(Ship(i).length).toEqual(i);
      expect(Ship(i).location.length).toEqual(i);
    };
  });

  test('location', () => {
    for (let i = 1; i < 5; i++) {
      expect(Ship(i).location.join('')).toMatch(/^[0-9]*$/);
    };
  });

  test('hit', () => {
    for (let i = 1; i < 5; i++) {
      const fakeHit = jest
        .fn(Ship(i).hit)
        .mockImplementationOnce(() => true)
        .mockImplementationOnce(() => false);

      expect(fakeHit()).toBeTruthy();
      expect(fakeHit()).toBeFalsy();
    };
  });

  test('isSunk', () => {
    for (let i = 1; i < 5; i++) {
      expect(Ship(i).isSunk()).toBeFalsy();
    };
    expect(Ship(0).isSunk()).toBeTruthy();
  });
});

describe('Gameboard function tests', () => {

  test('checkAllSunk', () => {
    let fakeAllSunk = jest
      .fn(Gameboard.checkAllSunk)
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false);

    expect(fakeAllSunk()).toBeTruthy();
    expect(fakeAllSunk()).toBeFalsy();
  })
})

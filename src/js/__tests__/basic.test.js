import sortUnits from '../basic';

const result = sortUnits([
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]);

const expectation = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sortedHealth', () => {
  expect(result).toEqual(expectation);
});

test('sortedHealth2', () => {
  expect(result).not.toBe(expectation);
});

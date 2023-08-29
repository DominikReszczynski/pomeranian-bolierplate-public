import { handleOnClick, sum } from './Testing.jsx';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 5 + 2 to equal 7', () => {
  expect(sum(5, 2)).toBe(7);
});

test('object assigment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
  console.log(data === data);
});

test('adds 1 + 2 not to equal 7', () => {
  expect(sum(1, 2)).not.toBe(7);
});

test('adds 0.1 + 0.2 close to 0.3', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

test('data is peanut butter', async () => {
  const result = 'peanut butter';
  const data = await Promise.resolve(result);
  expect(data).toBe(result);
});
test('handle on click calls set state function', () => {
  const setIsVisibleMock = jest.fn();
  handleOnClick(setIsVisibleMock);
  expect(setIsVisibleMock).toHaveBeenCalledWith(expect.any(Function)); // Oczekujemy, że będzie wywołana z funkcją
});

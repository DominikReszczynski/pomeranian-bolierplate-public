import { getRandomInt, ToDoList } from './ToDoList';
import { render, screen } from '@testing-library/react';

describe('getRandomIng', () => {
  beforeAll(() => {
    jest.spyOn(Math, 'random');
  });
  it('returns 0 when random is close to 0', () => {
    Math.random.mockImplementation(() => 0.00001);
    expect(getRandomInt(8)).toBe(0);
  });
  it('returns (param - 1) when random is close to one', () => {
    Math.random.mockImplementation(() => 0.999);
    expect(getRandomInt(8)).toBe(7);
  });
  it('returns 0 when random is 0', () => {
    Math.random.mockImplementation(() => 0.0001);
    expect(getRandomInt(8)).toBe(0);
  });
});

describe('ToDoList', () => {
  it('has header = todo list', () => {
    render(<ToDoList />);
    const heading = screen.getByRole('heading', { name: /todo list/i });
    expect(heading).toBeInTheDocument();
  });
});
describe('ToDoList refresh button', () => {
  it('refresh button todo list', () => {
    render(<ToDoList />);
    const refreshButton = screen.getByRole('button', { name: /refresh/i });
    expect(refreshButton).toBeInTheDocument();
  });
});

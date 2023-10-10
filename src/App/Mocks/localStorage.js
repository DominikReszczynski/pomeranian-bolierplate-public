import { testData } from './testData';
// const baseURL = 'http://localhost:3333';
// const basePath = `${baseURL}/api/todo`;
// const DELAY = 0;

const localStorageName = 'todo-api';

export const getFromeLocalStorage = () => {
  const storedData = localStorage.getItem(localStorageName);
  return storedData ? JSON.parse(storedData) : testData;
};

export const getToDoFromLS = (id) =>
  getFromeLocalStorage().find((todo) => todo.id === id);

export const saveToLS = (todos) => {
  localStorage.setItem(localStorageName, JSON.stringify(todos));
};

export const editLocalStorage = (callback) => {
  const prevToDos = getFromeLocalStorage();
  const newToDos = callback(prevToDos);
  saveToLS(newToDos);
  return newToDos;
};

export const editToDo = (id, newToDo) => {
  const newToDos = editLocalStorage((todos) =>
    todos.map((todo) => (todo?.id === id ? { ...todo, ...newToDo } : todo))
  );
  saveToLS(newToDos);
  return newToDos.find((todo) => todo.id === id);
};

export const markAsDone = (id) => {
  const newToDos = editLocalStorage((todo) =>
    todo?.id === id
      ? { ...todo, isDone: true, doneDate: new Date().toISOString() }
      : todo
  );
  saveToLS(newToDos);
  return newToDos.find((todo) => todo.id === id);
};

export const deleteToDo = (id) => {
  const prevToDos = getFromeLocalStorage();
  const newToDos = prevToDos.filter((todo) => todo.id !== id);
  saveToLS(newToDos);
};

export const addToDo = (todo) => {
  const prevToDos = getFromeLocalStorage();
  const { id } = prevToDos.reduce((prev, current) =>
    prev?.id > current?.id ? prev : current
  );
  const newID = id + 1;
  const newToDo = {
    ...todo,
    id: newID,
    createdAt: new Date().toISOString(),
    isDone: false,
  };
  prevToDos.push(newToDo);
  saveToLS(prevToDos);
  console.log(newID, newToDo, prevToDos);
  return newToDo;
};

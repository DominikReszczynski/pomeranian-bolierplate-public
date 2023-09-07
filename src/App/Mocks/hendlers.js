// src/mocks/handlers.js
import { rest } from 'msw';

import {
  addToDo,
  deleteToDo,
  editToDo,
  getFromeLocalStorage,
  getToDoFromLS,
  markAsDone,
} from './localStorage';

const baseURL = 'http://localhost:3333';
const basePath = `${baseURL}/api/todo`;
const DELAY = 0;

const mockGet = rest.get(basePath, (_req, res, ctx) => {
  const todos = getFromeLocalStorage();
  return res(ctx.delay(DELAY), ctx.json(todos));
});

const mockGetOne = rest.get(`${basePath}/:id`, (req, res, ctx) => {
  const id = parseInt(req.params?.id);
  const todo = getToDoFromLS(id);
  return res(ctx.delay(DELAY), ctx.json(todo));
});

const mockUpdate = rest.put(`${basePath}/:id`, async (req, res, ctx) => {
  const id = parseInt(req.params?.id);
  const body = await req.text();
  const requestToDo = JSON.parse(body);
  const newToDo = editToDo(id, requestToDo);
  console.log(requestToDo, newToDo);
  return res(ctx.delay(DELAY), ctx.json(newToDo));
});

const mockMarkAsDone = rest.put(
  `${basePath}/:id/markAsDone`,
  async (req, res, ctx) => {
    const id = parseInt(req.params?.id);
    // const body = await req.text();
    const newToDo = markAsDone(id);
    return res(ctx.delay(DELAY), ctx.json(newToDo));
  }
);

const mockPost = rest.post(basePath, async (req, res, ctx) => {
  const body = await req.text();
  const requestToDo = JSON.parse(body);
  const newToDo = addToDo(requestToDo);
  return res(ctx.delay(DELAY), ctx.json(newToDo));
});

const mockDelete = rest.delete(`${basePath}/:id`, (req, res, ctx) => {
  const id = parseInt(req.params?.id);
  deleteToDo(id);
  return res(ctx.delay(DELAY), ctx.json({ id }));
});

export const handlers = [
  mockGet,
  mockPost,
  mockDelete,
  mockGetOne,
  mockUpdate,
  mockMarkAsDone,
];

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoForm } from './TodoForm/TodoForm';
import { Link } from 'react-router-dom';

export const BASE_API_URL = 'http://localhost:3333/api';
//http://localhost:3333/api-docs/  -  komendy serwer
//http://localhost:3333/api/todo   -   dane na serwerze
export function TodoWithServer() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState([]);
  const [isFormVisibility, setFormVisibility] = useState(false);

  const [idForEdit, setIdForEdit] = useState(null);
  console.log('id' + idForEdit);
  const handleFetchTodoData = async () => {
    const timeOutDuration = 5000; //5sec czekania na odpoiedź serwera

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo`);
      const timeOutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response Timeout')),
          timeOutDuration
        );
      });

      const response = await Promise.race([fetchDataPromise, timeOutPromise]);

      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }
      setError('');
      setTodoList(response.data);
    } catch (error) {
      setError('Wystpił błąd podczas komunikacji z serwerem ' + error?.message);
    }
  };

  useEffect(() => {
    handleFetchTodoData();
  }, []);
  return (
    <div className="todo-container">
      <h1>To Do List z serwerem lokalnym</h1>
      {error && (<div className='startInfoAboutServer'>
        <h2>! Żeby To Do List działał trzeba najpierw uruchomić server lokalny !</h2>
        <p><strong>lokalizacja: src/server/swager/pomeranian-local-dev-server</strong> w środku przeczytaj README</p>
      </div>)}
      {error && <h3 className='errorInfo'>{error}</h3>}

      {isFormVisibility && (
        <TodoForm
          setFormVisibility={setFormVisibility}
          handleFetchTodoData={handleFetchTodoData}
          setIdForEdit={setIdForEdit}
          data={todoList.find((todo) => todo.id === idForEdit)}
        />
      )}
      {!isFormVisibility && (
        <>
          <div className="todo-container__list">
            {todoList.length > 0 &&
              todoList.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.id}
                    handleFetchTodoData={handleFetchTodoData}
                    setIdForEdit={setIdForEdit}
                    setFormVisibility={setFormVisibility}
                  />
                );
              })}
          </div>
        </>)}
      {!error && (
        <div className='conteiner__todoBtn'>
          <button
            className="todoBtn"
            onClick={() => {
              setFormVisibility(true);
            }}
          >
            DODAJ
          </button></div>)}
    </div>
  );
}

import { useState } from 'react';

export const useInputValue = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  // revealing object pattern(外部からはchangeInputとclearInputの名前で:後の関数を呼び出せる)
  // 要はカプセル化のことらしい
  return {
    inputValue,
    //text変更時にeventハンドラに引数を渡す
    changeInput: (event) => {
      setInputValue(event.nativeEvent.text)},
    clearInput: () => setInputValue(''),
  };
};


export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,

    addTodo: (todoText) => {
      if (todoText !== '') {
        setTodos(todos.concat({ todoText, checked: false }));
      }
    },

    checkTodo: (checkIndex) => {
      setTodos(
        todos.map((todo, index) => {
          if (checkIndex === index) todo.checked = !todo.checked;
        return todo;
        })
      )
    },
    //setTodoするためにfilter
    removeTodo: (removeIndex) => {
      setTodos(todos.filter((todos, index) => removeIndex !== index));
    }
  };
};
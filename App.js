import React, { useState, useEffect } from 'react';
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

import { useInputValue, useTodos } from "./hooks/todolist";

export default function App() {
    const { inputValue, changeInput, clearInput } = useInputValue();
    const { todos, addTodo, checkTodo, removeTodo } = useTodos();

    const clearInputAndAddTodo = () => {
        clearInput();
        addTodo(inputValue);
    };

      return (
        <Layout>
          <AddTodoForm
            inputValue={inputValue}
            changeInput={changeInput}
            onIconPress={clearInputAndAddTodo}
          />
          <TodoList
            items={todos}
            onItemCheck={idx => checkTodo(idx)}
            onItemRemove={idx => removeTodo(idx)}
          />
        </Layout>
    )
}

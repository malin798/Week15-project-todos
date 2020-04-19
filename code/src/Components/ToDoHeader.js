import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoitem } from './Reducers/todoitem';

export const ToDoHeader = () => {
  const dispatch = useDispatch();
  const allItems = useSelector((store) => store.todoitem.items)

  return (
    <header>
      <div className="header-left">
        <h1>To do</h1>
        <p>Today's date</p>
      </div>
      <div className="header-right">
        <p>{allItems.length} tasks</p>
        <button onClick={() => dispatch(todoitem.actions.removeAll())}>remove all</button>
      </div>
    </header>
  )
}
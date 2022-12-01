import React, { useState } from 'react';
import "./App.css"

import Todoarea from './coponents/Todoarea';


function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, isDone: false, title: "리액트 공부하기", body: "리액트를 공부해보자" },
    { id: 1, isDone: true, title: "리액트 공부하기", body: "리액트를 공부해보자" },
  ]);
  const [titlevalue, setTitlevalue] = useState("");
  const [bodyvalue, setBodyvalue] = useState("");

  const addItem = () => {
    setTodoList([...todoList,
    { id: todoList.length++, isDone: false, title: titlevalue, body: bodyvalue }])
    setTitlevalue("")
    setBodyvalue("")
  }

  const onRemove = id => {
    setTodoList(todoList.filter(item => item.id !== id))
    //(itme => itme.id === !id)로 설정해서 클릭하면 전부 다 삭제되는 현상 발생 -> 해결 
  }


  return (

    <div className='todo-App'>
      <div className='todo-App-Header'>
        <div className='todo-React'>My Todo List</div>
        <div className='todo-React'>React</div>
      </div>
      <div className='todo-Header'>
        <div className='todo-Input'>
          제목    <input
            className='todo-Input'
            value={titlevalue}
            style={{ width: '240px', height: '40px' }}
            onChange={(e) => setTitlevalue(e.target.value)}
          /></div>
        <div className='todo-Input'>
          내용  <input
            className='todo-Input'
            style={{ width: '240px', height: '40px' }}
            value={bodyvalue}
            onChange={(e) => setBodyvalue(e.target.value)}
          /></div>
        <button className='todo-btn' onClick={addItem}>추가하기</button>
      </div>

      <Todoarea onRemove={onRemove}
        todoList={todoList}
        setTodoList={setTodoList}

      />
    </div>
  );
}

export default App;




import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react'
import Todoarea from "./Todoarea";
import "../App.css"
import { addTodos } from "../redux/modules/todo";



const TodoForm = () => {
    const [values, setValues] = useState("")
    const myTodo = useSelector((state) => state.todo.todolist);

    const toDays = new Date();
    // 수정 필요
    const dispatch = useDispatch();

    const onClickAddHandler = () => {
        const newTodoList = {
            id: toDays.getMilliseconds(),
            title: values.title,
            body: values.body,
            isDone: false,
        };
        dispatch(addTodos(newTodoList))
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        // setValues("")
    }

    const onSubmitHandler = (event) => {

        if (values.title.trim() === "" || values.body.trim() === "")

            return;
        event.preventDefault();
    }

    return (
        <div className='todo-App'>
            <div className='todo-App-Header'>
                <div className='todo-React'>My Todo List</div>
                <div className='todo-React'>React</div>
            </div>
            <div className='todo-Header'>
                <form onSubmit={onSubmitHandler}>
                    <div className='todo-Input'>

                        제목
                        <input
                            className='todo-Input'
                            name="title"
                            value={values.title}
                            style={{ width: '240px', height: '40px' }}
                            onChange={onChangeHandler}
                        /></div>
                    <div className='todo-Input'>
                        내용
                        <input
                            className='todo-Input'
                            style={{ width: '240px', height: '40px' }}
                            value={values.body}
                            name="body"
                            onChange={onChangeHandler}
                        /></div>

                    <button className='todo-btn' onClick={onClickAddHandler}>추가하기</button>
                </form>
            </div>

            <Todoarea todoList={myTodo} />

        </div >
    )
}

export default TodoForm
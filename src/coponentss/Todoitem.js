import React from 'react'
import { deleteTodos, toggleTodo } from '../redux/modules/todo';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Todoitem = ({ item }) => {
    const { id, } = item;
    const dispatch = useDispatch()

    const toggle = (id) => {
        dispatch(toggleTodo(id))
    }
    const onRemove = id => {
        dispatch(deleteTodos(id))
    }


    return (
        <div>

            <div className='todo-Item'>
                <Link to={`/detail/${item.id}`}>상세페이지</Link>
                <div className='item-Title'>{item.title}</div>
                <div className='item-Body'>{item.body}</div>
                <div className='item-Btn-Header'>
                    <div><button className='item-btn'
                        onClick={() => onRemove(id)}>삭제하기</button>
                        <button className='item-btn2'
                            onClick={() => toggle(id)}>{item.isDone ? "취소" : "완료"}</button></div>
                </div>
            </div>

        </div >
    )
}

export default Todoitem
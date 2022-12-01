import React from 'react'


const Todoitem = ({ onRemove, setTodoList, todoList, item }) => {
    const { id, } = item;

    const toggle = (id) => {
        setTodoList(todoList.map((item) => {
            return item.id === id ? { ...item, isDone: !item.isDone } : item
        }))
    }

    return (
        <div>

            <div className='todo-Item'>
                <div className='item-Title'>{item.title}</div>
                <div className='item-Body'>{item.body}</div>
                <div className='item-Btn-Header'>
                    <div><button className='item-btn'
                        onClick={() => onRemove(id)}>삭제하기</button>
                        <button className='item-btn2'
                            onClick={() => toggle(id)}>{item.isDone ? "취소" : "완료"}</button></div>
                </div>
            </div>

        </div>
    )
}

export default Todoitem
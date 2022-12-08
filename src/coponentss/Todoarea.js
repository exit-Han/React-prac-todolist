import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Todoitem from './Todoitem'


const Todoarea = ({ todoList, setTodoList, item }) => {

    return (
        <div className='todo-Area-Header'>

            <div className='todo-Area'>Working.. 🔥</div>
            {todoList.map((item) => {
                if (!item.isDone) {
                    return <Todoitem item={item} />
                } else return
            })}

            <div className='todo-Area'>Done..! 🎉</div>
            {todoList.map((item) => {
                if (item.isDone) {
                    return <Todoitem item={item}
                    />
                }
            })}

        </div >
    )
}

export default Todoarea


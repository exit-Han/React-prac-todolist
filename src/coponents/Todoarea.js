import React from 'react'
import Todoitem from './Todoitem'


const Todoarea = ({ onRemove, todoList, setTodoList, item }) => {
    //const { id, isDone, title, body } = item
    // console.log(item)
    return (
        <div className='todo-Area-Header'>
            <div className='todo-Area'>Working.. 🔥</div>
            {todoList.map((item) => {
                if (!item.isDone) {
                    return <Todoitem
                        setTodoList={setTodoList} onRemove={onRemove}
                        key={item.id} todoList={todoList} item={item}
                    />
                } else return
            })}

            <div className='todo-Area'>Done..! 🎉</div>
            {todoList.map((item) => {
                if (item.isDone) {
                    return <Todoitem setTodoList={setTodoList} onRemove={onRemove}
                        key={item.id} todoList={todoList} item={item} />
                }
            })}

            {/* // isDone -> ture 면 Done에 
                // isDone -> false 면 Working에 
                //??map으로 filter로? */}


            {/* {todoList.map(item => {
                return item.isDone ? <Todoitem key={item.id} /> : <Todoitem />
            })} */}


            {/* return item.id === id ? { ...item, complete: !item.complete } : item; */}


            {/* {todoList.filter(item => item.isDone == isDone).map(item => { return item; })} */}
            {/* {todoList.isDone ? todoList.map((item) => <Todoitem />) : item} */}

        </div >
    )
}

export default Todoarea


// const result = sample.filter(data => data.role !== "leader")
//     .map(data => { return <div>{data.name}</div>; };
// );
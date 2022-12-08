import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Detail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const state = useSelector((state) => state.todo.todolist)


    return (
        <div>
            {state.map((item) => {
                console.log(item)
                if (item.id === id) {
                    return (
                        <div>

                            <div>{id}{item.title}</div>
                            <div>{item.body}</div>
                        </div>
                    )
                }
            })}

            <div onClick={() => navigate(-1)}>이전으로</div>
        </div>


    )
}

export default Detail
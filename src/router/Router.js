import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import Todoarea from '../coponentss/Todoarea';
import TodoForm from '../coponentss/TodoForm';
import Detail from '../pages/Detail';

const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoForm />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router;
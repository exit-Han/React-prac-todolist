// Action value
const ADD_TODOS = "ADD_TODOS";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODOS = "DELETE_TODOS";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creator
// Todo를 추가하는 action creator
export const addTodos = (payload) => {
    return {
        type: ADD_TODOS,
        payload,
    };
};

// Todo를 지우는 action creator
export const deleteTodos = (payload) => {
    return {
        type: DELETE_TODOS,
        payload,
    };
};

// Todo를 isDone를 변경하는 action creator
export const toggleTodo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload,
    };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
    return {
        type: GET_TODO_BY_ID,
        payload,
    };
};

// initial state
const initialState = {
    todolist: [
        {
            id: "1",
            title: "리액트",
            body: "리액트를 배워봅시다",
            isDone: false,
        },
    ],
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS:
            return {

                todolist: [...state.todolist, action.payload]

            };

        case TOGGLE_TODO:
            return {
                ...state,
                todolist: state.todolist.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            isDone: !todo.isDone,
                        };
                    } else {
                        return todo;
                    }
                }),
            };

        case GET_TODO_BY_ID:
            return {
                ...state,
                todolist: state.todolist.find((todo) => {
                    return todo.id === action.payload;
                }),
            };
        case DELETE_TODOS:
            return {
                //filter
                todolist: state.todolist.filter((item) => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default todo;
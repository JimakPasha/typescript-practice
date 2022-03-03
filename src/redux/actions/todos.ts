import axios from "axios";
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// этот интерфейс не обязательно прописывать
export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        });
    };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }
};
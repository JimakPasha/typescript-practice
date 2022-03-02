import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";

export const reducers = combineReducers({
    todos: todosReducer,
});

import {ADD_TODO_SUCCESS, DELETE_TODO_SUCCESS,UPDATE_TODO_SUCCESS, FETCH_TODO_SUCCESS, EDIT_TODO_VALUE} from './constants.js';
import axios from 'axios';
import {url} from '../utility/utility'

export function addTodoSuccess(todo) {
	return {
		type: ADD_TODO_SUCCESS,
		payload: todo
	}
}

export function deleteTodoSuccess(todoId) {
	return {
		type: DELETE_TODO_SUCCESS,
		payload: todoId
	}
}

export function updateTodoSuccess(todo) {
	return {
		type: UPDATE_TODO_SUCCESS,
		payload: todo
	}
}
export const fetchTodosSucess = (res)=>{
	return {
		type: FETCH_TODO_SUCCESS,
		payload: res
	}
}

export const editTodoSet = (val)=>{
	return {
		type: EDIT_TODO_VALUE,
		payload: val
	}
}

export const fetchTodos = ()=>{
	console.log('url', url)
	return dispatch =>{
		fetch(url).then(res=>res.json())
		.then(res=>dispatch(fetchTodosSucess(res))).catch(error=>{
			console.log('error', error)
		})
	}
	
}

export const updateTodo = (id, todo)=>{
	debugger
	console.log('updateTodo', id, todo)
	return dispatch=>{
		axios.put(`${url}${id}/`,todo)
		.then(res=>dispatch(updateTodoSuccess(res)))
		.catch(error=>{console.log('put error', error)})
	}
}

export const deleteTodo = (id)=>{
	return dispatch=>{
		fetch(`${url}${id}`, {
			method: 'DELETE',
		})
		.then(res=>dispatch(deleteTodoSuccess(res))).then(dispatch(fetchTodos()))
		.catch(error=>{console.log('put error', error)})
	}
}
export const addTodo = (todo)=>{

	return dispatch=>{
		axios.post(url, todo)
		.then(res=>{
			console.log('post response', res)
			dispatch(addTodoSuccess(res))
		}
			)
		.catch(error=>{console.log('post error', error)})
	}
}
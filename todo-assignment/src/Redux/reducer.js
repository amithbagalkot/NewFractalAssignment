import {ADD_TODO_SUCCESS, UPDATE_TODO_SUCCESS, FETCH_TODO_SUCCESS, DELETE_TODO_SUCCESS, EDIT_TODO_VALUE} from './constants'

let initialState = {
	todos: [],
	editOption: {id:null, editable: false}
}
export let reducer = (state=initialState, action)=> {
	switch(action.type) {

		case ADD_TODO_SUCCESS: 
		let newTodo = action.payload;
		let todos = {...state, todos:newTodo};
		console.log('todos', todos)
		return todos;

		case DELETE_TODO_SUCCESS:
		return 'DELETED SUCCESSfULLY';

		case UPDATE_TODO_SUCCESS:
		break;
		
		case EDIT_TODO_VALUE:
			return {
				...state,
				editOption: {id:action.payload.id, editable:action.payload.val}
			}

		case FETCH_TODO_SUCCESS:
			let Aobject ={
				...state,
				todos: action.payload
			}
		return Aobject
		
	}
	return state;
}
import React, {useEffect} from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../Redux/actions';

function TodoList() {
	let dispatch = useDispatch();

	const getTodos = ()=> dispatch(fetchTodos());
	
	let todos = useSelector(state=>{
		return state.todos
	});

	useEffect(()=>{
		getTodos()
	},[])

	return(
		<div>
		 {		
			todos.map(todo=>{ 
				return <TodoItem key={todo.id} todo = {todo} />
			 })
		 }
		</div>
		)
}


export default TodoList;
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo, updateTodo, fetchTodos, editTodoSet} from '../Redux/actions';
import { Card, CardContent, Typography, Container, IconButton, MuiThemeProvider, Modal } from '@material-ui/core';
import {Check, Delete, Edit } from '@material-ui/icons';


function TodoItem(props) {
	let dispatch = useDispatch();
	
	async function deleteTodoOne(id) {
		await dispatch(deleteTodo(id))
		await dispatch(fetchTodos())
	}

	async function editTodoOne(id) {
		dispatch(editTodoSet({val:true, id:id}))
	}
	

	return(
<div>
<Container>
<Card variant ="outlined" 
	style={{marginTop:35, background:'lightGray'}}>
		<CardContent>
			{/* check icon */}
		<Typography variant="h5" component="h2"/>
	<IconButton>
		<Check style={{color:'green'}}/>
	</IconButton>
	{props.todo.title}
	<IconButton style={{float:'right'}} onClick={()=>{deleteTodoOne(props.todo.id)}}>
		<Delete style={{color:'red'}}/>
	</IconButton>
	<IconButton style={{float:'right'}} onClick={()=>{editTodoOne(props.todo.id)}} >
		<Edit style={{color:'blue'}} />
	</IconButton>
		</CardContent>
	
	</Card>
</Container>

</div>
		)
}

export default TodoItem;
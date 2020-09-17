import React from 'react';
import {addTodo, editTodoSet, updateTodo} from '../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {FormControl, Container, TextField, Button, Modal} from '@material-ui/core';

function TodoInput() {

	let editable = useSelector(state=>{
		return state.editOption.editable
	});
	let editId = useSelector(state=>{
		return state.editOption.id
	});
	let [title, setTitle] = useState();
	let [description, setDescription] = useState();

	let dispatch = useDispatch();
	
	function titleChange(e) {
		setTitle(e.target.value)
	}
	function descriptionChange(e) {
		setDescription(e.target.value)
	}
	
	function createTodo() {
		dispatch(addTodo(
		{
				title:title,
				description:description,
				completed: false
		}

		))
	}
	function editTodo() {
		dispatch(updateTodo(editId, 
			{
					title:title,
					description:description,
					completed: false
			}
	
			))
	}

	async function handleClose() {
		dispatch(editTodoSet(true))
	}

	return(
		<div>
		<Modal open={editable} onClose={handleClose}>

<Container>
		<form>
		<FormControl>
		<TextField label="title"  onChange={(e)=>titleChange(e)} required={true}></TextField>
		<TextField label="description"  onChange={(e)=>descriptionChange(e)} required={true}></TextField>
		<Button  color="primary" onClick={()=>editTodo()} type="submit">Edit</Button>
		</FormControl>
		</form>
		</Container>

</Modal>
<Container>
		<form>
		<FormControl>
		<TextField label="title"  onChange={(e)=>titleChange(e)} required={true}></TextField>
		<TextField label="description"  onChange={(e)=>descriptionChange(e)} required={true}></TextField>
		<Button  color="primary" onClick={()=>createTodo()} type="submit">Add Todo</Button>
		</FormControl>
		</form>
		</Container>
		</div>
			)
}


export default TodoInput;
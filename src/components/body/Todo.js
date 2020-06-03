import React, { Fragment } from 'react';

//reusable components
import { TextField } from '../';

//mui components
import { Button } from '@material-ui/core';

//contextapi
import { withMainContext } from '../../contextapi';

//components
import { RenderTodo } from '../';

function Todo ({
	onSubmitHandler,
	message,
	handleChange,
	editMode,
	todo,
	toggleStatus,
	onEdit,
	onDelete
}) {
	return (
		<Fragment>
			<form onSubmit={onSubmitHandler} className="input-wrapper">
				<TextField
					isFocus={true}
					name="message"
					value={message}
					handleChange={handleChange}
					label="message"
				/>
				<Button type="submit" color="primary" variant="outlined" size="medium">
					{editMode ? 'Update' : 'Save'}
				</Button>
			</form>
			{Array.isArray(todo) && todo.filter((v) => v.isDone === false).length ? (
				<Fragment>
					<RenderTodo
						todo={todo.filter((v) => v.isDone === false)}
						toggleStatus={toggleStatus}
						onEdit={onEdit}
						onDelete={onDelete}
					/>
					<br />
				</Fragment>
			) : (
				''
			)}
			{Array.isArray(todo) && todo.filter((v) => v.isDone === true).length ? (
				<Fragment>
					<RenderTodo
						todo={todo.filter((v) => v.isDone === true)}
						toggleStatus={toggleStatus}
						onEdit={onEdit}
						onDelete={onDelete}
					/>
					<br />
				</Fragment>
			) : (
				''
			)}
		</Fragment>
	);
}

export default withMainContext(Todo);

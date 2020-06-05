import React, { Fragment } from 'react';

//reusable components
import { TextField } from '../';

//mui components
import { Button, Grid, Typography } from '@material-ui/core';

//contextapi
import { withMainContext } from '../../contextapi';

//components
import { RenderTodo } from '../';

function Todo({
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
			<br />
			<hr />
			<br />
			<Grid
				container
				justify={todo.filter((v) => v.isDone === true).length ? 'space-around' : 'flex-start'}
				alignItems="baseline"
				spacing={0}
			>
				{Array.isArray(todo) && todo.filter((v) => v.isDone === false).length ? (
					<Grid item container sm={5} justify="center">
						<Typography color="secondary" variant="body1" children="PENDING things to do" />
						<RenderTodo
							todo={todo.filter((v) => v.isDone === false)}
							toggleStatus={toggleStatus}
							onEdit={onEdit}
							onDelete={onDelete}
						/>
					</Grid>
				) : (
					''
				)}
				{Array.isArray(todo) && todo.filter((v) => v.isDone === true).length ? (
					<Grid item container sm={5} justify="center">
						<Typography color="primary" variant="body1" children="things has been DONE" />
						<RenderTodo
							todo={todo.filter((v) => v.isDone === true)}
							toggleStatus={toggleStatus}
							onEdit={onEdit}
							onDelete={onDelete}
						/>
					</Grid>
				) : (
					''
				)}
			</Grid>
		</Fragment>
	);
}

export default withMainContext(Todo);

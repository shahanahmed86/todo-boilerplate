import React, { useEffect, useState } from 'react';

//mui components
import {
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	IconButton
} from '@material-ui/core';

//mui icons
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';

function RenderTodo(props) {
	const [ todo, setTodo ] = useState([ ...props.todo ]);
	useEffect(() => setTodo([ ...props.todo ]), [ props.todo ]);
	return (
		<TableContainer component={Paper} className="root">
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Sr.#</TableCell>
						<TableCell>Message{todo.length > 1 ? '(s)' : ''}</TableCell>
						<TableCell>Options</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{todo.map(({ id, message, isDone }, i) => (
						<TableRow key={i}>
							<TableCell>{i + 1}</TableCell>
							<TableCell>{message}</TableCell>
							<TableCell>
								<div className="flex-third-column">
									<IconButton
										aria-label="status"
										size="small"
										color="inherit"
										onClick={() => props.toggleStatus(id)}
									>
										{isDone ? <DoneAllIcon /> : <DoneIcon />}
									</IconButton>
									<IconButton
										aria-label="edit"
										size="small"
										color="primary"
										onClick={() => props.onEdit(id)}
									>
										<EditIcon />
									</IconButton>
									<IconButton
										aria-label="delete"
										size="small"
										color="secondary"
										onClick={() => props.onDelete(id)}
									>
										<DeleteIcon />
									</IconButton>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default RenderTodo;
